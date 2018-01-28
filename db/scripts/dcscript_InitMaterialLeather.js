use dcdb;

db.materials.insertMany([
  {
    name: "Canine Leather",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Bronto Hide",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Deepstalker Hide",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Sunder when Hit" }
    ]
  },
  {
    name: "Dragonling Scales",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Fire Resistance" }
    ]
  },
  {
    name: "Druffalo Hide",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Critical Chance" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Fennec Fur",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Critical Chance" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Nugskin",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Ram Leather",
    type: "Leather",
    tier: 1,
    properties: [
      { type: "Main", property: "Low Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "August Ram Leather",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Bear Hide",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Critical Chance" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Gurgut Webbing",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Fire Resistance" }
    ]
  },
  {
    name: "Halla Leather",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Phoenix Scales",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Sunder when Hit" }
    ]
  },
  {
    name: "Quillback Leather",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Rough Hide",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Varghest Scales",
    type: "Leather",
    tier: 2,
    properties: [
      { type: "Main", property: "Medium Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Sunder when Hit" }
    ]
  },
  {
    name: "Craggy Skin",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Great Bear Hide",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Critical Chance" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Hardened Gurgut Skin",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Fire Resistance" }
    ]
  },
  {
    name: "Hardened Gurn Hide",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Sunder when Hit" }
    ]
  },
  {
    name: "Hardened Tusket Skin",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Lurker Scales",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  },
  {
    name: "Snoufleur Skin",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Flanking Damage" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Wyvern Scales",
    type: "Leather",
    tier: 3,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Sunder on Hit" },
      { type: "Defense", property: "Fire Resistance" }
    ]
  },
  {
    name: "Dragon Scales",
    type: "Leather",
    tier: 4,
    properties: [
      { type: "Main", property: "Very High Rating" },
      { type: "Utility", property: "Dexterity/Cunning" },
      { type: "Offense", property: "Armor Penetration" },
      { type: "Defense", property: "Fire Resistance" }
    ]
  },
  {
    name: "Ice Dragon Hide",
    type: "Leather",
    tier: 4,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Dexterity" },
      { type: "Offense", property: "Critical Chance" },
      { type: "Defense", property: "Cold Resistance" }
    ]
  },
  {
    name: "Imbued Tusket Hide",
    type: "Leather",
    tier: 4,
    properties: [
      { type: "Main", property: "High Rating" },
      { type: "Utility", property: "Cunning" },
      { type: "Offense", property: "Critical Damage" },
      { type: "Defense", property: "Ranged Defense" }
    ]
  }
]);
