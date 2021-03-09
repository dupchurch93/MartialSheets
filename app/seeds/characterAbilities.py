from app.models import db, Character, Ability


def seed_characterAbilities():
    grydal = Character.query.filter(Character.name == "Grydal").first()
    barb1 = Ability.query.filter(Ability.source == "1:Barbarian:any").all()
    barb2 = Ability.query.filter(Ability.source == "2:Barbarian:any").all()

    for ability in barb1:
        grydal.abilities.append(ability)

    for ability in barb2:
        grydal.abilities.append(ability)

    db.session.add(grydal)
    db.session.commit()

def undo_charcterAbilities():
    pass
