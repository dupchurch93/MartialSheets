from flask import Blueprint, jsonify, session, request
from app.models import db, Character, Ability
from sqlalchemy import or_
import json

abilities_routes = Blueprint('abilities', __name__)


# load level 1 abilities
@abilities_routes.route('/level1')
def load_level1_abilities():
    abilities = Ability.query.filter(Ability.source.like("1:%")).all()
    return {"features": [ability.to_dict() for ability in abilities]}


@abilities_routes.route('/<int:charId>/<int:level>/<string:subclass>', methods=["GET"])
def get_level_up_abilities(charId, level, subclass):
    charDict = Character.query.get(charId).to_dict()
    characterClass = charDict['class']
    subc = subclass.replace("%20", " ")
    abilitiesOnLevelUp = Ability.query.filter(or_(
        Ability.source.like(f'{level}:{characterClass}:any%'),
        Ability.source.like(f'{level}:{characterClass}:{subclass}%')
        )).all()
    if(abilitiesOnLevelUp):
        return {"features": [ability.to_dict() for ability in abilitiesOnLevelUp]}
    else:
        return {"nofeatures": "no features"}
