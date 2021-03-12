from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextField
from wtforms.validators import DataRequired, Email, ValidationError, Length
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
    characterClass = StringField('characterClass', validators=[DataRequired()])
    subclass = StringField('subclass')
    hitpoints = IntegerField('hitpoints', validators=[DataRequired()])
    speed = IntegerField('speed', validators=[DataRequired()])
    imgURL = StringField('imgURL')
    proficiencies = StringField('proficiencies', validators=[DataRequired()])
    background = StringField('background', validators=[DataRequired()])
    alignment = StringField('alignment', validators=[DataRequired()])
    attributes = StringField('attributes', validators=[DataRequired()])
    traits = StringField('traits', validators=[Length(0, 500, "Too long. Please keep under 500 characters.")])
    ideals = StringField('ideals', validators=[Length(0, 500, "Too long. Please keep under 500 characters.")])
    bonds = StringField('bonds', validators=[Length(0, 500, "Too long. Please keep under 500 characters.")])
    flaws = StringField('flaws', validators=[Length(0, 500, "Too long. Please keep under 500 characters.")])
    inventory = TextField('inventory')
    description = TextField('description')
    languages = StringField('flaws')
    tools = StringField('tools')
    tags = StringField('tags')
