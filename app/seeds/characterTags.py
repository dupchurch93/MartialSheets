from app.models import db, Character, Tag


def seed_characterTags():
    # get the character and tag you want to add to
    grydal = Character.query.filter(Character.name == "Grydal").first()
    isabella = Character.query.filter(Character.name == "Isabella").first()
    laten = Character.query.filter(Character.name == "LatenKull").first()
    irelia = Character.query.filter(Character.name == "Irelia of the Flaming Fist").first()

    dwarftag = Tag.query.filter(Tag.name == "Dwarf").first()
    humantag = Tag.query.filter(Tag.name == "Human").first()
    halflingtag = Tag.query.filter(Tag.name == "Halfling").first()

    barbtag = Tag.query.filter(Tag.name == "Barbarian").first()
    roguetag = Tag.query.filter(Tag.name == "Rogue").first()
    fightertag = Tag.query.filter(Tag.name == "Fighter").first()
    monktag = Tag.query.filter(Tag.name == "Monk").first()

    deadTag = Tag.query.filter(Tag.name == "Dead").first()
    tyrannyTag = Tag.query.filter(Tag.name == "Tyranny of Dragons").first()
    # using the relationship of tags, which was created on the character class, we can append the tag to it
    grydal.tags.append(barbtag)
    grydal.tags.append(dwarftag)

    isabella.tags.append(halflingtag)
    isabella.tags.append(roguetag)
    isabella.tags.append(deadTag)

    laten.tags.append(fightertag)
    laten.tags.append(humantag)
    laten.tags.append(tyrannyTag)

    irelia.tags.append(humantag)
    irelia.tags.append(monktag)
    irelia.tags.append(tyrannyTag)

    # commit the change in the relationship
    db.session.commit()


def undo_characterTags():
    pass
