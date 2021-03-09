from flask import Blueprint, jsonify, session, request
from app.models import db, Character, User
from flask_login import current_user
from app.forms import CharacterForm

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
    form['csrf_token'].data = request.cookies['csrf_token']
    print("print statement --------------", form.data)
    return {"success": "yay"}
