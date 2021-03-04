from app.models import db, Character, Tag


def seed_characterTags():
    grydal = Character.query.filter(Character.name == "Grydal").first()
    tag = Tag.query.filter(Tag.name == "Barbarian").first()

    grydal.tags.append(tag)
    db.session.add(grydal)
    db.session.commit()

def undo_characterTags():
    pass
