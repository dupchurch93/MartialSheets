from flask import Blueprint, jsonify, session, request
from app.models import db, Character, Tag, Ability
from flask_login import current_user
from app.forms.character_form import CharacterForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
import ast
import json

character_routes = Blueprint('character', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


# get all characters for a user
@character_routes.route('/')
def get_characters():
    characters = (
        Character.query.filter(Character.userId == current_user.id).all()
    )
    return {"Characters": [character.to_dict() for character in characters]}


@character_routes.route('/create', methods=["POST"])
def create_character():

    form = CharacterForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    if form.validate_on_submit():
        #  s3 image helper functions. Steps: test if image is in files,
        #  grab image, check if it is required type,
        #  give it a unique name so aws does not overwrite,
        #  then upload to aws, returning any errors if upload fails.

        if "image" not in request.files:
            return {"errors": ["image required"]}
        image = request.files["image"]
        if not allowed_file(image.filename):
            return {"errors": ["file type not permitted"]}
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        if "url" not in upload:
            return {"errors": [upload['errors']]}
        url = upload["url"]
        #  create a new instance of the character class
        character = Character()
        # populate character instance with data from form & aws url
        character = Character(
            userId=form.data['userId'],
            name=form.data['name'],
            level=form.data['level'],
            race=form.data['race'],
            characterClass=form.data['characterClass'],
            subclass=form.data['subclass'],
            hitpoints=form.data['hitpoints'],
            speed=form.data['speed'],
            imgURL=url,
            proficiencies=form.data['proficiencies'],
            background=form.data['background'],
            alignment=form.data['alignment'],
            attributes=form.data['attributes'],
            traits=form.data['traits'],
            ideals=form.data['ideals'],
            bonds=form.data['bonds'],
            flaws=form.data['flaws'],
            inventory=form.data['inventory'],
            description=form.data['description'],
            languages=form.data['languages'],
            tools=form.data['tools']
        )
        # Take care of tag creation
        #  grab tags and query to check if they are created already
        if len(form.data['tags']) > 0:
            tagsFormatted = [tag.strip() for tag in form.data['tags'].split(",")]
            for tag in tagsFormatted:
                queriedTag = Tag.query.filter(Tag.name == tag).first()
                if(queriedTag):
                    character.tags.append(queriedTag)
                else:
                    tag = Tag(
                        name=tag
                    )
                    character.tags.append(tag)
        classTag = Tag.query.filter(Tag.name == form.data['characterClass']).first()
        raceTag = Tag.query.filter(Tag.name == form.data['race']).first()

        character.tags.append(classTag)
        character.tags.append(raceTag)
        # Take care of abilites and ability appending
        for feature in json.loads(form.data['features']):
            feature_to_add = (
                Ability.query.filter(Ability.name == feature['name']).first()
            )
            if(feature_to_add):
                character.abilities.append(feature_to_add)
            else:
                return {"errors": "Failed to add ability"}


        # add and commit character
        db.session.add(character)
        db.session.commit()
        return character.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@character_routes.route('/delete', methods=["DELETE"])
def delete_character():
    char_id = int(request.data.decode("UTF-8"))
    char_to_delete = Character.query.get(char_id)
    if char_to_delete:
        db.session.delete(char_to_delete)
        db.session.commit()
        return {"Success": "Character deleted."}
    else:
        return {"errors": "Character not found, something went wrong."}


@character_routes.route('/tag', methods=["DELETE"])
def delete_character_tag():
    decoded = json.loads(request.data.decode("UTF-8"))
    character = Character.query.get(decoded['charId'])
    tag_to_remove = Tag.query.filter(Tag.name == decoded['tag']).first()
    if character and tag_to_remove:
        character.tags.remove(tag_to_remove)
        db.session.commit()
        return character.to_dict()
    elif not character:
        return({"errors": "Character not found."})
    else:
        return({"errors": "Tag not found."})


@character_routes.route('/tag', methods=["POST"])
def add_character_tag():
    decoded = json.loads(request.data.decode("UTF-8"))
    character = Character.query.get(decoded['charId'])
    tag = Tag.query.filter(Tag.name == decoded['tag']).first()
    if not tag:
        tag = Tag(name=decoded['tag'])
    if character:
        character.tags.append(tag)
        db.session.commit()
        return character.to_dict()
    else:
        return({"errors": ["Tag was not added."]})


@character_routes.route('/levelUp', methods=["PATCH"])
def levelUp():
    decoded = json.loads(request.data.decode("UTF-8"))
    character = Character.query.get(decoded['charId'])
    character.hitpoints = decoded['hitpoints']
    character.level = decoded['level']
    character.attributes = decoded['newAttributes']
    if(character.subclass != decoded['characterSubclass']):
        character.subclass = decoded['characterSubclass']
    for feature in decoded['features']:
        feature_to_add = (
            Ability.query.filter(Ability.name == feature).first()
        )
        print("feature to add", feature_to_add.source)
        if(feature_to_add):
            character.abilities.append(feature_to_add)
        else:
            return {"errors": "Failed to add ability"}
    db.session.commit()
    abilities_to_receive = Ability.query.filter(Ability.source)
    return character.to_dict()
