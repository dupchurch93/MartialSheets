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
        hitpoints=15,
        imgURL="https://martialsheets-image-bucket.s3.amazonaws.com/dwarf_berzerker.jpg",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 8, "wis": 15, "cha": 8}),
        traits="Hates giants, dislikes elves, likes other short races",
        ideals="fight til death",
        bonds="Silverbeard, House Branka",
        flaws="quick to judge, kind of an asshole",
        inventory=" Handaxe, Javelin, Explorer's Pack, Greataxe, Smith's Tools, Tinkerer's Tools, Healing Potion, Keen Whetson, Rope(100ft), Pendant, Troll Skull(for reasons), Scale Armor",
        description="A mean dwarf but good to have at your side. Gets real angry.",
        languages="Common, Dwarven, Orcish",
        tools="Blacksmith's Tools, Harmonica"

    )

    isabella = Character(
        userId=1,
        name="Isabella",
        level=1,
        race="Halfling",
        characterClass="Rogue",
        proficiencies="Athletics,Insight,History,Perception,Survival",
        hitpoints=11,
        background="Sailor",
        alignment="Chaotic Good",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        traits="Hates giants, dislikes elves, likes other short races",
        ideals="fight til death",
        imgURL="https://martialsheets-image-bucket.s3.amazonaws.com/isabella.jpg",
        bonds="Silverbeard, House Branka",
        flaws="quick to judge, kind of an asshole",
        inventory="Too many stolen goods",
        description="Sticky fingers embodied."

    )

    laten = Character(
        userId=1,
        name="LatenKull",
        level=1,
        race="Human",
        characterClass="Fighter",
        hitpoints=13,
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Soldier",
        alignment="True Neutral",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        traits="Hates giants, dislikes elves, likes other short races",
        ideals="fight til death",
        imgURL="https://martialsheets-image-bucket.s3.amazonaws.com/latenkull.png",
        bonds="Silverbeard, House Branka",
        flaws="quick to judge, kind of an asshole",
        inventory="Lots of swords.",
        description="A weary soldier."

    )

    irelia = Character(
        userId=1,
        name="Irelia of the Flaming Fist",
        level=1,
        race="Human",
        characterClass="Monk",
        hitpoints=11,
        proficiencies="Athletics,Insight,History,Perception,Survival",
        background="Sailor",
        alignment="Chaotic Good",
        imgURL="https://martialsheets-image-bucket.s3.amazonaws.com/Irelia.png",
        attributes=json.dumps({"str": 17, "dex": 10, "con": 16, "int": 12, "wis": 12, "cha": 12}),
        traits="Hates giants, dislikes elves, likes other short races",
        ideals="fight til death",
        bonds="Silverbeard, House Branka",
        flaws="quick to judge, kind of an asshole",
        inventory="Lots of knick knacks.",
        description="Very naive, but a good heart."

    )


    db.session.add_all([grydal, isabella, laten, irelia])
    db.session.commit()

def undo_characters():
    db.session.execute('TRUNCATE characters;')
    db.session.commit()
