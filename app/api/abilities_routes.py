from flask import Blueprint, jsonify, session, request
from app.models import db, Character, Ability
from sqlalchemy import or_
import json

abilities_routes = Blueprint('abilities', __name__)


# load level 1 abilities
@abilities_routes.route('/level1')
def load_level1_abilities():
    abilities = Ability.query.filter(Ability.source.like("1%")).all()
    return {"features": [ability.to_dict() for ability in abilities]}


@abilities_routes.route('/<int:charId>/<int:level>', methods=["GET"])
def get_level_up_abilities(charId, level):
    print("charId", charId)
    print("level", level)
    charDict = Character.query.get(charId).to_dict()
    abilitiesOnLevelUp = Ability.query.filter(or_(
        Ability.name == "Rage",
        Ability.name == "Frenzy"
        )).all()
    print('abilities------------- returned', abilitiesOnLevelUp)
    return charDict


@abilities_routes.route('/levelUp', methods=["PATCH"])
def levelUp():
    decoded = json.loads(request.data.decode("UTF-8"))
    character = Character.query.get(decoded['charId'])
    abilities_to_receive = Ability.query.filter(Ability.source)
