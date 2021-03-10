from flask import Blueprint, jsonify, session, request
from app.models import db, Character, User
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
    # print('in backend get characters route------')
    # for character in characters:
    #     print(character.to_dict())
    return {"Characters": [character.to_dict() for character in characters]}


@character_routes.route('/create', methods=["POST"])
def create_character():

    form = CharacterForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # if form.validate_on_submit():
    print("request files-----------", "image" in request.files)
    if True:
        if "image" not in request.files:
            return {"errors": ["image required"]}

        image = request.files["image"]

        if not allowed_file(image.filename):
            return {"errors": ["file type not permitted"]}

        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)

        if "url" not in upload:
            return upload

        url = upload["url"]
        character = Character()
        form.populate_obj(Character)
        character["imgURL"] = url
        print("character", character.to_dict())
        # character = Character(
        #     userId=form.data['userId'],
        #     name=form.data['name'],
        #     level=form.data['level'],
        #     race=form.data['race'],
        #     characterClass=form.data['characterClass'],
        #     subclass=form.data['subclass'],
        #     hitpoints=form.data['hitpoints'],
        #     speed=form.data['speed'],
        #     imgURL=url,
        #     proficiencies=form.data['proficiencies'],
        #     background=form.data['background'],
        #     alignment=form.data['alignment'],
        #     attributes=form.data['attributes'],
        #     traits=form.data['traits'],
        #     ideals=form.data['ideals'],
        #     bonds=form.data['bonds'],
        #     flaws=form.data['flaws'],
        #     inventory=form.data['inventory'],
        #     description=form.data['description'],
        #     languages=form.data['languages'],
        #     tools=form.data['tools']
        # )
        db.session.add(character)
        db.session.commit()
        return character.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
