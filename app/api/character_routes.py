from flask import Blueprint, jsonify, session, request
from app.models import db, Character, User
from flask_login import current_user
from app.forms.character_form import CharacterForm
import ast

character_routes = Blueprint('character', __name__)


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
    print("form here------", form.data)
    if form.validate_on_submit():
        character = Character(
            userId=form.data['userId'],
            name=form.daata['name'],
            level=form.data['level'],
            race=form.data['race'],
            characterClass=['characterClass'],
            subclass=form.data['subclass'],
            hitpoints=form.data['hitpoints'],
            speed=form.data['speed'],
            imgURL=form.data['imgURL'],
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
    form['csrf_token'].data = request.cookies['csrf_token']
    # print("print statement --------------", form.data)
    return {"success": "yay"}
