from app.models import db, Character
import json


def seed_characters():

    grydal = Character(
        userId=1,
        name="Grydal",
        level=1,
        race="Dwarf",
        characterClass="Barbarian",
        subclass="Path of the Zealot",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="A bunch of crap along with one good axe",
        description="A mean dwarf but good to have at your side. Gets real angry."

    )

    db.session.add(grydal)
    db.session.commit()

def undo_characters():
    db.session.execute('TRUNCATE characters;')
    db.session.commit()
