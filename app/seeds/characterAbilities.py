from app.models import db, Character, Ability


def seed_characterAbilities():
    grydal = Character.query.filter(Character.name == "Grydal").first()
    rage = Ability.query.filter(Ability.name == "Rage").first()

    grydal.abilities.append(rage)
    
    db.session.add(grydal)
    db.session.commit()

def undo_charcterAbilities():
    pass
