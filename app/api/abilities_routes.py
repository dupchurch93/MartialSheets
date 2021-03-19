from flask import Blueprint, jsonify, session, request
from app.models import db, Character, Ability

abilities_routes = Blueprint('abilities', __name__)


# load level 1 abilities
@abilities_routes.route('/level1')
def load_level1_abilities():
    abilities = Ability.query.filter(Ability.source.like("1%")).all()
    return {"features": [ability.to_dict() for ability in abilities]}
