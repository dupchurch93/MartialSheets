from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Character


def character_exists(form, field):
    name = field.data
    character = User.query.filter(Character.name == name).first()
    if user:
        raise ValidationError("Character is already registered.")


class CharacterForm(FlaskForm):
    userId = IntegerField('userId', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    level = IntegerField('level', validators=[DataRequired()])
    race = StringField('race', validators=[DataRequired()])
    characterClass = StringField('class', validators=[DataRequired()])
    subclass = StringField('subclass')
    hitpoints = IntegerField('hitpoints', validators=[DataRequired()])
    speed = IntegerField('speed', validators=[DataRequired()])
    imgURL = StringField('imgURL')
    proficiencies = StringField('proficiencies', validators=[DataRequired()])
    background = StringField('background', validators=[DataRequired()])
    alignment = StringField('alignment', validators=[DataRequired()])
    attributes = StringField('attributes', validators=[DataRequired()])
    traits = StringField('traits')
    ideals = StringField('ideals')
    bonds = StringField('bonds')
    flaws = StringField('flaws')
    inventory = TextField('inventory')
    description = TextField('description')
    languages = StringField('flaws')
    tools = StringField('tools')
    tags = StringField('tags')
