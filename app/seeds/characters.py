from app.models import db, Character
import json


def seed_characters():

    grydal = Character(
        userId=1,
        name="Grydal",
        level=1,
        race="Dwarf",
        characterClass="Barbarian",
        subclass="Path of the Berserker",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="A bunch of crap along with one good axe",
        description="A mean dwarf but good to have at your side. Gets real angry.",
        languages="Common, Dwarven, Orcish",
        tools="Blacksmith's Tools, Harmonica"

    )

    isabella = Character(
        userId=1,
        name="Isabella",
        level=1,
        race="Halfing",
        characterClass="Rogue",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="Too many stolen goods",
        description="Sticky fingers embodied."

    )

    laten = Character(
        userId=1,
        name="LatenKull",
        level=1,
        race="Human",
        characterClass="Fighter",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Soldier",
        alignment="True Neutral",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="Lots of swords.",
        description="A weary soldier."

    )

    irelia = Character(
        userId=1,
        name="Irelia of the Flaming Fist",
        level=1,
        race="Human",
        characterClass="Monk",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="Lots of knick knacks.",
        description="Very naive, but a good heart."

    )

    grydal1 = Character(
        userId=1,
        name="Grydal",
        level=1,
        race="Dwarf",
        characterClass="Barbarian",
        subclass="Path of the Berserker",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="A bunch of crap along with one good axe",
        description="A mean dwarf but good to have at your side. Gets real angry."

    )

    grydal2 = Character(
        userId=1,
        name="Grydal",
        level=1,
        race="Dwarf",
        characterClass="Barbarian",
        subclass="Path of the Berserker",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="A bunch of crap along with one good axe",
        description="A mean dwarf but good to have at your side. Gets real angry."

    )

    grydal3 = Character(
        userId=1,
        name="Grydal",
        level=1,
        race="Dwarf",
        characterClass="Barbarian",
        subclass="Path of the Berserker",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        personality=json.dumps({"traits": "Hates giants, dislikes elves, likes other short races", "ideals": "fight til death", "bonds": "Silverbeard, House Branka", "flaws": "quick to judge, kind of an asshole"}),
        inventory="A bunch of crap along with one good axe",
        description="A mean dwarf but good to have at your side. Gets real angry."

    )

    db.session.add_all([grydal, isabella, laten, irelia, grydal1, grydal2, grydal3])
    db.session.commit()

def undo_characters():
    db.session.execute('TRUNCATE characters;')
    db.session.commit()
