from app.models import db, Character, Tag


def seed_characterTags():
    #get the character and tag you want to add to
    grydal = Character.query.filter(Character.name == "Grydal").first()
    tag = Tag.query.filter(Tag.name == "Barbarian").first()
    #using the relationship of tags, which was created on the character class, we can append the tag to it
    grydal.tags.append(tag)
    #commit the change in the relationship
    db.session.add(grydal)
    db.session.commit()

def undo_characterTags():
    pass
