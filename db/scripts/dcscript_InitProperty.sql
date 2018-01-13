USE dcdb;

SET
  @SlotTypeMain = 1,
  @SlotTypeOffense = 2,
  @SlotTypeDefense = 3,
  @SlotTypeUtility = 4;

INSERT INTO Property (PropertyName, SlotTypeId) VALUES
	("Low Rating",@SlotTypeMain), -- 1
	("Medium Rating",@SlotTypeMain), -- 2
	("High Rating",@SlotTypeMain), -- 3
	("Very High Rating",@SlotTypeMain), -- 4
	("Magic",@SlotTypeUtility), -- 5
	("Willpower",@SlotTypeUtility), -- 6
	("Cunning",@SlotTypeUtility), -- 7
	("Dexterity",@SlotTypeUtility), -- 8
	("Strength",@SlotTypeUtility), -- 9
	("Constitution",@SlotTypeUtility), -- 10
	("Attack",@SlotTypeOffense), -- 11
	("Barrier Damage",@SlotTypeOffense), -- 12
	("Critical Damage",@SlotTypeOffense), -- 13
	("Heal on Kill",@SlotTypeOffense), -- 14
	("Sunder on Hit",@SlotTypeOffense), -- 15
	("Critical Chance",@SlotTypeOffense), -- 16
	("Flanking Damage",@SlotTypeOffense), -- 17
	("Armor Penetration",@SlotTypeOffense), -- 18
	("Guard Damage",@SlotTypeOffense), -- 19
	("Stagger on Hit",@SlotTypeOffense), -- 20
	("Electric Resistance",@SlotTypeDefense), -- 21
	("Heal Bonus",@SlotTypeDefense), -- 22
	("Magic Defense",@SlotTypeDefense), -- 23
	("Spirit Resistance",@SlotTypeDefense), -- 24
	("Cold Resistance",@SlotTypeDefense), -- 25
	("Sunder when Hit",@SlotTypeDefense), -- 26
	("Fire Resistance",@SlotTypeDefense), -- 27
	("Ranged Defense",@SlotTypeDefense), -- 28
	("Health",@SlotTypeDefense), -- 29
	("Melee Defense",@SlotTypeDefense), -- 30
	("Stagger on Being Hit",@SlotTypeDefense), -- 31
	("Magic/Willpower",@SlotTypeUtility), -- 32
	("Dexterity/Cunning",@SlotTypeUtility), -- 33
	("Strength/Constitution",@SlotTypeUtility); -- 34
