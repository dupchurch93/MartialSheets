from flask import Blueprint, jsonify, session, request
from app.models import db, Character, Tag
from flask_login import current_user
from app.forms.character_form import CharacterForm
from app.s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
import ast

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
        #  grab tags and query to check if they are created already
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
        # classTag = Tag.query.filter(Tag.name == form.data['characterClass'])
        # # raceTag = Tag.query.filter(Tag.name == form.data['race'])

        # character.tags.append(classTag)
        # character.tags.append(raceTag)
        #  add and commit character
        db.session.add(character)
        db.session.commit()
        return character.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
