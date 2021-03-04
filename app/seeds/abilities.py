from app.models import db, Ability


def seed_abilities():

    rage = Ability(
        name="Rage",
        description='''In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.

While raging, you gain the following benefits if you aren’t wearing heavy armor:

    You have advantage on Strength checks and Strength saving throws.
    When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian, as shown in the Rage Damage column of the Barbarian table.
    You have resistance to bludgeoning, piercing, and slashing damage.

If you are able to cast spells, you can’t cast them or concentrate on them while raging.

Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.

Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.''',
    source="1:Barbarian:any"
    )

    rageCount = Ability(
        name="Rage Count: 2",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="1:Barbarian:any"
    )
    rageDamage = Ability(
        name="Bonus Rage Damage: 2",
        description="Extra damage gained on melee attack while raging. Increases with level.",
        source="1:Barbarian:any"
    )

    recklessAttack = Ability(
        name="Reckless Attack",
        description="Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        source="2:Barbarian:any"
    )

    dangerSense = Ability(
        name="Danger Sense",
        description="At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        source="2:Barbarian:any"
    )

    frenzy = Ability(
        name="Frenzy",
        description="Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
        source="3:Barbarian:Path of the Berserker"
    )

    totemSpirit = Ability(
        name="Totem Spirit",
        description="At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )

    totemSpiritBear = Ability(
        name="Totem Spirit - Bear",
        description="Bear. While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )

    totemSpiritEagle = Ability(
        name="Totem Spirit - Eagle",
        description="Eagle. While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )

    totemSpiritElk = Ability(
        name="Totem Spirit - Elk",
        description="Elk. While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )

    totemSpiritTiger = Ability(
        name="Totem Spirit - Tiger",
        description="Tiger. While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )

    totemSpiritWolf = Ability(
        name="Totem Spirit - Wolf",
        description="Wolf. While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
        source="3:Barbarian:Path of the Totem Warrior:choice:totemSpirit"
    )


    db.session.add_all([rage, rageCount, rageDamage, dangerSense, frenzy, recklessAttack,
    totemSpirit, totemSpiritBear, totemSpiritTiger, totemSpiritWolf, totemSpiritEagle, totemSpiritElk])
    db.session.commit()

def undo_abilities():
    db.session.execute('TRUNCATE abilities;')
    db.session.commit()
