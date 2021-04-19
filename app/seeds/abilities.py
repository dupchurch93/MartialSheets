from app.models import db, Ability


def seed_abilities():
    # Barbarian abilities
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

    race_count = Ability(
        name="Rage Count: 2",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="1:Barbarian:any:increment:rage_count"
    )

    rage_count_level_3 = Ability(
        name="Rage Count: 3",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="3:Barbarian:any:increment:rage_count"
    )

    rage_count_level_6 = Ability(
        name="Rage Count: 4",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="6:Barbarian:any:increment:rage_count"
    )

    rage_count_level_12 = Ability(
        name="Rage Count: 5",
        description="Amount of times you can rage per long rest. Increases with level.",

        source="12:Barbarian:any:increment:rage_count"
    )

    rage_count_level_17 = Ability(
        name="Rage Count: 6",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="17:Barbarian:any:increment:rage_count"
    )

    rage_count_level_20 = Ability(
        name="Rage Count: Unlimited",
        description="Amount of times you can rage per long rest. Increases with level.",
        source="20:Barbarian:any:increment:rage_count"
    )

    rage_damage = Ability(
        name="Bonus Rage Damage: 2",
        description="Extra damage gained on melee attack while raging. Increases with level.",
        source="1:Barbarian:any:increment:rage_damage"
    )

    barb_extra_attack = Ability(
        name="Extra Attack",
        description="Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
        source="5:Barbarian:any"
    )

    reckless_attack = Ability(
        name="Reckless Attack",
        description="Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
        source="2:Barbarian:any"
    )

    danger_sense = Ability(
        name="Danger Sense",
        description="At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated.",
        source="2:Barbarian:any"
    )

    fast_movement = Ability(
        name="Fast Movement",
        description="Your speed icnreases by 10 feet while you aren't wearing heavy armor.",
        source="5:Barbarian:any"
    )

    feral_instinct = Ability(
        name="Feral Instinct",
        description='''By 7th level, your instincts are so honed that you have advantage on initiative rolls.

Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.''',
        source="7:Barbarian:any"
    )

    instinctive_pounce = Ability(
        name="Instinctive Pounce",
        description="At 7th level, as part of the bonus action you take to enter your rage, you can move up to half your speed.",
        source="7:Barbarian:any"
    )

    brutal_critical = Ability(
        name="Brutal Critical",
        description='''Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.

This increases to two additional dice at 13th level and three additional dice at 17th level.''',
        source="9:Barbarian:any"
    )

    relentless_rage = Ability(
        name="Relentless Rage",
        description='''Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.

Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.''',
        source="11:Barbarian:any"
    )

    persistent_rage = Ability(
        name="Persistent Rage",
        description="Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.",
        source="15:Barbarian:any"
    )

    indomitable_might = Ability(
        name="Indomitable Might",
        description="Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total.",
        source="18:Barbarian:any"
    )

    primal_champion = Ability(
        name="Primal Champion",
        description="At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
        source="20:Barbarian:any"
    )

    # Path of the Berserker
    frenzy = Ability(
        name="Frenzy",
        description="Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
        source="3:Barbarian:Path of the Berserker"
    )

    mindless_rage = Ability(
        name="Mindless Rage",
        description="Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.",
        source="6:Barbarian:Path of the Berserker"
    )

    intimidating_presence = Ability(
        name="Intimidating Presence",
        description='''Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.
            If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours.''',
        source="10:Barbarian:Path of the Berserker"
    )

    retaliation = Ability(
        name="Retaliation",
        description="Starting at 14th level, when you take damage from a creature that is within 5 feet of you, you can use your reaction to make a melee weapon attack against that creature.",
        source="14:Barbarian:Path of the Berserker"
    )

    # Totem Warrior
    totem_spirit = Ability(
        name="Totem Spirit",
        description="At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
        source="3:Barbarian:Path of the Totem Warrior:option:Totem Spirit"
    )

    totem_spirit_bear = Ability(
        name="Totem Spirit - Bear",
        description="Bear. While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment.",
        source="3:Barbarian:Path of the Totem Warrior:choice:Totem Spirit"
    )

    totem_spirit_eagle = Ability(
        name="Totem Spirit - Eagle",
        description="Eagle. While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease.",
        source="3:Barbarian:Path of the Totem Warrior:choice:Totem Spirit"
    )

    totem_spirit_elk = Ability(
        name="Totem Spirit - Elk",
        description="Elk. While you're raging and aren't wearing heavy armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift.",
        source="3:Barbarian:Path of the Totem Warrior:choice:Totem Spirit"
    )

    totem_spirit_tiger = Ability(
        name="Totem Spirit - Tiger",
        description="Tiger. While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps.",
        source="3:Barbarian:Path of the Totem Warrior:choice:Totem Spirit"
    )

    totem_spirit_wolf = Ability(
        name="Totem Spirit - Wolf",
        description="Wolf. While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters.",
        source="3:Barbarian:Path of the Totem Warrior:choice:Totem Spirit"
    )

    totem_aspect = Ability(
        name="Aspect of the Beast",
        description="At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one.",
        source="6:Barbarian:Path of the Totem Warrior:option:Totem Aspect"
    )

    totem_aspect_bear = Ability(
        name="Totem Aspect - Bear",
        description="Bear. You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects.",
        source="6:Barbarian:Path of the Totem Warrior:choice:Totem Aspect"
    )

    totem_aspect_eagle = Ability(
        name="Totem Aspect - Eagle",
        description="Eagle. You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks.",
        source="6:Barbarian:Path of the Totem Warrior:choice:Totem Aspect"
    )

    totem_aspect_elk = Ability(
        name="Totem Aspect - Elk",
        description="Elk. Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast.",
        source="6:Barbarian:Path of the Totem Warrior:choice:Totem Aspect"
    )

    totem_aspect_tiger = Ability(
        name="Totem Aspect - Tiger",
        description="Tiger. You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts.",
        source="6:Barbarian:Path of the Totem Warrior:choice:Totem Aspect"
    )

    totem_aspect_wolf = Ability(
        name="Totem Aspect - Wolf",
        description="Wolf. You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace.",
        source="6:Barbarian:Path of the Totem Warrior:choice:Totem Aspect"
    )

    spirit_walker = Ability(
        name="Spirit Walker",
        description="At 10th level, you can cast the Commune with Nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek.",
        source="10:Barbarian:Path of the Totem Warrior"
    )

    totemic_attunement = Ability(
        name="Totemic Attunement",
        description="At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one.",
        source="14:Barbarian:Path of the Totem Warrior:choice:Totemic Attunement"
    )

    # Fighter Abilities
    second_wind = Ability(
        name="Second Wind",
        description='''You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.
        Once you use this feature, you must finish a short or long rest before you can use it again.''',
        source="2:Fighter:any"
    )

    fighting_style = Ability(
        name="Fighting Style",
        description="You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again.",
        source="1:Fighter:any:option:Fighting Style"
    )

    fighting_style_archery = Ability(
        name="Fighting Style Archery",
        description="You gain a +2 bonus to attack rolls you make with ranged weapons.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_blind_fighting = Ability(
        name="Fighting Style Blind Fighting",
        description="Blind Fighting. You have blindsight with a range of 10 feet. Within that range, you can effectively see anything that isn't behind total cover, even if you're blinded or in darkness. Moreover, you can see an invisible creature within that range, unless the creature successfully hides from you.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_defense = Ability(
        name="Fighting Style Defense",
        description="While you are wearing armor, you gain a +1 bonus to AC.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_dueling = Ability(
        name="Fighting Style Dueling",
        description="When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_great_weapon_fighting = Ability(
        name="Fighting Style Great Weapon Fighting",
        description="When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_interception = Ability(
        name="Fighting Style Interception",
        description="When a creature you can see hits a target, other than you, within 5 feet of you with an attack, you can use your reaction to reduce the damage the target takes by 1d10 + your proficiency bonus (to a minimum of 0 damage). You must be wielding a shield or a simple or martial weapon to use this reaction.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_protection = Ability(
        name="Fighting Style Protection",
        description="When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_superior_technique = Ability(
        name="Fighting Style Superior Technique",
        description="You learn one maneuver of your choice from among those available to the Battle Master archetype. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice.) You gain one superiority die, which is a d6 (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest. Thrown Weapon Fighting. You can draw a weapon that has the thrown property as part of the attack you make with the weapon. In addition, when you hit with a ranged attack using a thrown weapon, you gain a +2 bonus to the damage roll.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_two_weapon_fighting = Ability(
        name="Fighting Style Two Weapon Fighting",
        description="When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    fighting_style_unarmed_fighting = Ability(
        name="Fighting Style Unarmed Fighting",
        description="Your unarmed strikes can deal bludgeoning damage equal to 1d6 + your Strength modifier on a hit. If you aren't wielding any weapons or a shield when you make the attack roll, the d6 becomes a d8. At the start of each of your turns, you can deal 1d4 bludgeoning damage to one creature grappled by you.",
        source="1:Fighter:any:choice:Fighting Style"
    )

    combat_superiority = Ability(
        name="Combat Superiority",
        description='''When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.

Maneuvers. You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack. You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.

Superiority Dice. You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest. You gain another superiority die at 7th level and one more at 15th level.

Saving Throws. Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows:

Maneuver save DC = 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice)''',
        source="3:Fighter:Battle Master"
    )

    student_of_war = Ability(
        name="Student of War",
        description='''At 3rd level, you gain proficiency with one type of artisan's tools of your choice.''',
        source="3:Fighter:Battle Master"
    )

    improved_critical = Ability(
        name="Improved Critical",
        description='''Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20.''',
        source="3:Fighter:Champion"
    )

    # Monk abilities
    unarmored_defense = Ability(
      name="Unarmored Defense",
      description="Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.",
      source="1:Monk:any"
    )

    martial_arts = Ability(
      name="Martial Arts",
      description=''' At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don’t have the two-handed or heavy property.

        You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:

            You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.
            You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of the Monk table.
            When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn.

        Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon in the Weapons section.''',
      source="1:Monk:any"
    )

    # Rogue Abilities
    expertise = Ability(
        name="Expertise",
        description='''At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.

    At 6th level, you can choose two more of your proficiencies (in skills or with thieves’ tools) to gain this benefit.''',
        source="1:Rogue:any"
    )

    sneak_attack = Ability(
        name="Sneak Attack",
        description='''Beginning at 1st level, you know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.

        You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. Increases with level.''',
        source="1:Rogue:any"
    )

    thieves_cant = Ability(
        name="Thieves Cant",
        description='''During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.

        In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.''',
        source="1:Rogue:any"
    )





    db.session.add_all([rage, race_count, rage_damage, danger_sense, frenzy,
                        reckless_attack, totem_spirit, totem_spirit_bear,
                        totem_spirit_tiger, totem_spirit_wolf,
                        totem_spirit_eagle, totem_spirit_elk,
                        fighting_style, fighting_style_archery,
                        fighting_style_blind_fighting, fighting_style_defense,
                        fighting_style_dueling,
                        fighting_style_great_weapon_fighting,
                        fighting_style_interception, fighting_style_protection,
                        fighting_style_superior_technique,
                        fighting_style_unarmed_fighting,
                        fighting_style_two_weapon_fighting, unarmored_defense,
                        martial_arts, expertise, sneak_attack, thieves_cant,
                        fast_movement, rage_count_level_3, rage_count_level_6,
                        rage_count_level_12, barb_extra_attack, second_wind,
                        improved_critical, student_of_war, combat_superiority,
                        rage_count_level_17, rage_count_level_20,
                        feral_instinct, instinctive_pounce, brutal_critical,
                        relentless_rage, persistent_rage, indomitable_might,
                        primal_champion, intimidating_presence, mindless_rage,
                        retaliation, totem_aspect, totem_aspect_bear,
                        totem_aspect_wolf, totem_aspect_eagle,
                        totem_aspect_elk, totem_aspect_tiger, spirit_walker,
                        totemic_attunement, totemic_attunement_bear,
                        totemic_attunement_wolf, totemic_attunement_elk,
                        totemic_attunement_tiger, totemic_attunement_eagle,
                        ])
    db.session.commit()


def undo_abilities():
    db.session.execute('TRUNCATE abilities;')
    db.session.commit()
