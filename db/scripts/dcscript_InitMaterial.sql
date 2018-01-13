USE dcdb;

SET
  @MatTypeCloth = 1,
  @MatTypeLeather = 2,
  @MatTypeMetal = 3;

INSERT INTO Material (MaterialName, Tier, MaterialTypeId) VALUES
	("Cotton",1,@MatTypeCloth), -- 1
	("Lambswool",1,@MatTypeCloth), -- 2
	("Plaideweave",1,@MatTypeCloth), -- 3
	("Samite",1,@MatTypeCloth), -- 4
	("Silk",1,@MatTypeCloth), -- 5
	("Velveteen",1,@MatTypeCloth), -- 6
	("Darkened Samite",2,@MatTypeCloth), -- 7
	("Everknit Wool",2,@MatTypeCloth), -- 8
	("Highever Weave",2,@MatTypeCloth), -- 9
	("Lustrous Cotton",2,@MatTypeCloth), -- 10
	("Ring Velvet",2,@MatTypeCloth), -- 11
	("Silk Brocade",2,@MatTypeCloth), -- 12
	("Avvar Cotton",3,@MatTypeCloth), -- 13
	("Dales Loden Wool",3,@MatTypeCloth), -- 14
	("Imperial Vestment Cotton",3,@MatTypeCloth), -- 15
	("Infused Vyrantium Samite",3,@MatTypeCloth), -- 16
	("King's Willow Weave",3,@MatTypeCloth), -- 17
	("Plush Fustian Velvet",3,@MatTypeCloth), -- 18
	("Royale Sea Silk",3,@MatTypeCloth), -- 19
	("Avvar Twill",4,@MatTypeCloth), -- 20
	("Dragon Webbing",4,@MatTypeCloth), -- 21
	("Silken Nether Cloth",4,@MatTypeCloth), -- 22
	("Canine Leather",1,@MatTypeLeather),
	("Bronto Hide",1,@MatTypeLeather),
	("Deepstalker Hide",1,@MatTypeLeather),
	("Dragonling Scales",1,@MatTypeLeather),
	("Druffalo Hide",1,@MatTypeLeather),
	("Fennec Fur",1,@MatTypeLeather),
	("Nugskin",1,@MatTypeLeather),
	("Ram Leather",1,@MatTypeLeather),
	("August Ram Leather",2,@MatTypeLeather),
	("Bear Hide",2,@MatTypeLeather),
	("Gurgut Webbing",2,@MatTypeLeather),
	("Halla Leather",2,@MatTypeLeather),
	("Phoenix Scales",2,@MatTypeLeather),
	("Quillback Leather",2,@MatTypeLeather),
	("Rough Hide",2,@MatTypeLeather),
	("Varghest Scales",2,@MatTypeLeather),
	("Craggy Skin",3,@MatTypeLeather),
	("Great Bear Hide",3,@MatTypeLeather),
	("Hardened Gurgut Skin",3,@MatTypeLeather),
	("Hardened Gurn Hide",3,@MatTypeLeather),
	("Hardened Tusket Skin",3,@MatTypeLeather),
	("Lurker Scales",3,@MatTypeLeather),
	("Red Hart Leather",3,@MatTypeLeather),
	("Snofleur Skin",3,@MatTypeLeather),
	("Wyvern Scales",3,@MatTypeLeather),
	("Dragon Scales",4,@MatTypeLeather),
	("Ice Dragon Hide",4,@MatTypeLeather),
	("Imbued Tusket Hide",4,@MatTypeLeather),
	("Blue Vitriol",1,@MatTypeMetal),
	("Drakestone",1,@MatTypeMetal),
	("Iron",1,@MatTypeMetal),
	("Onyx",1,@MatTypeMetal),
	("Serpentstone",1,@MatTypeMetal),
	("Summer Stone",1,@MatTypeMetal),
	("Bloodstone",2,@MatTypeMetal),
	("Lazurite",2,@MatTypeMetal),
	("Obsidian",2,@MatTypeMetal),
	("Paragon's Luster",2,@MatTypeMetal),
	("Pyrophite",2,@MatTypeMetal),
	("Serault Infused Glass",2,@MatTypeMetal),
	("Veridium",2,@MatTypeMetal),
	("Dawnstone",3,@MatTypeMetal),
	("Everite",3,@MatTypeMetal),
	("Nevarrite",3,@MatTypeMetal),
	("Silverite",3,@MatTypeMetal),
	("Stormheart",3,@MatTypeMetal),
	("Volcanic Aurum",3,@MatTypeMetal),
	("Dragon Bone",4,@MatTypeMetal),
	("Ice Dragon Bone",4,@MatTypeMetal),
	("Veil Quartz",4,@MatTypeMetal);
