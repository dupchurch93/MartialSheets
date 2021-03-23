const subclasses = {
  Barbarian: [
    {
      name: "Path of the Berserker",
      description:
        "For some barbarians, rage is a means to an end – that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being.",
      sampleFeature: {
        name: "Frenzy",
        description:
          "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion.",
      },
    },

    {
      name: "Path of the Totem Warrior",
      description: `The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.

                Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist.`,
      sampleFeature: {
        name: "Totem Spirit",
        description:
          "At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object – an amulet or similar adornment – that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
      },
    },
  ],
};

export default subclasses;
