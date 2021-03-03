from app.models import db, Tag


def seed_tags():

    barb = Tag(
        name="Barbarian",
    )
    rogue = Tag(
        name="Rogue",
    )
    fighter = Tag(
        name="Fighter",
    )
    monk = Tag(
        name="Monk",
    )

    db.session.add_all([barb, rogue, fighter, monk])
    db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE abilities;')
    db.session.commit()
