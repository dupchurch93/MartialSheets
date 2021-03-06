from .db import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(256), nullable=False)
    level = db.Column(db.Integer, nullable=False, default=1)
    race = db.Column(db.String(50), nullable=False)
    characterClass = db.Column(db.String(50), nullable=False)
    subclass = db.Column(db.String(100))
    hitpoints = db.Column(db.Integer, nullable=False)
    speed = db.Column(db.Integer, nullable=False, default=30)
    imgURL = db.Column(db.String(256))
    proficiencies = db.Column(db.String(1000), nullable=False)
    background = db.Column(db.String(50), nullable=False)
    alignment = db.Column(db.String(50), nullable=False)
    attributes = db.Column(db.String(100), nullable=False)
    personality = db.Column(db.String(1000), nullable=False)
    inventory = db.Column(db.Text)
    description = db.Column(db.Text)
    languages = db.Column(db.String(500))
    tools = db.Column(db.String(500))

    user = db.relationship('User')
    abilities = db.relationship('Ability', secondary='characterAbilities', lazy='joined')
    tags = db.relationship('Tag', secondary='characterTags', lazy='joined', backref=db.backref('tag_characters'))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "level": self.level,
            "race": self.race,
            "class": self.characterClass,
            "subclass": self.subclass,
            "hitpoints": self.hitpoints,
            "imgURL": self.imgURL,
            "proficiencies": self.proficiencies,
            "speed": self.speed,
            "background": self.background,
            "alignment": self.alignment,
            "attributes": self.attributes,
            "personality": self.personality,
            "inventory": self.inventory,
            "description": self.description,
            "languages": self.languages,
            "tools": self.tools,
            "abilities": [ability.to_dict() for ability in self.abilities],
            "tags": [tag.name for tag in self.tags]
        }


class Ability(db.Model):
    __tablename__ = 'abilities'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    source = db.Column(db.String(100), nullable=False)

    character = db.relationship('Character', secondary='characterAbilities', backref=db.backref('character_abilities'))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "source": self.source
        }


characterAbilities = db.Table(
    'characterAbilities',
    db.Column('characterId', db.Integer, db.ForeignKey('characters.id'), primary_key=True, nullable=False),
    db.Column('abilityId', db.Integer, db.ForeignKey('abilities.id'), primary_key=True, nullable=False)
    )


class Tag(db.Model):
    __tablename__ = 'tags'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
        }


characterTags = db.Table(
    'characterTags',
    db.Column('characterId', db.Integer, db.ForeignKey('characters.id'), primary_key=True, nullable=False),
    db.Column('tagId', db.Integer, db.ForeignKey('tags.id'), primary_key=True, nullable=False)
    )
