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

    raceTags = [Tag(name="Human"), Tag(name="Dwarf"), Tag(name="Elf"),
    Tag(name="Dragonborn"), Tag(name="Gnome"), Tag(name="Half-Elf"), Tag(name="Half-Orc"),
    Tag(name="Tiefling"), Tag(name="Halfing")]

    db.session.add_all([barb, rogue, fighter, monk, *raceTags])
    db.session.commit()

def undo_tags():
    db.session.execute('TRUNCATE abilities;')
    db.session.commit()
