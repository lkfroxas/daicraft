USE dcdb;

SET
  @TypeStaff = 1,
  @TypeBow = 2,
  @TypeDagger = 3,
  @Type1H = 4,
  @Type2H = 5,
  @TypeShield = 6,
  @TypeWU = 7,
  @TypeLight = 8,
  @TypeMed = 9,
  @TypeHeavy = 10,
  @TypeArms = 11,
  @TypeLegs = 12;

INSERT INTO Schematic (SchematicName, Tier, SchematicTypeId) VALUES
  ('Mortalitasi Firm Club', 3, @Type1H),
  ('Prismatic Greataxe', 3, @Type2H),
  ('Encore', 3, @TypeStaff),
	('Stone Stalker Blade', 4, @TypeDagger), -- 4
	('Elgar\'nan Enaste', 3, @TypeBow), -- 5
	('Bianca Arms VII', 4, @TypeBow), -- 6
	('Revered Defender Bulwark', 4, @TypeShield), -- 7
	('Cowl of the Pure', 4, @TypeLight), -- 8
	('Stone Stalker Mask', 4, @TypeMed), -- 9
	('Revered Defender Helm', 4, @TypeHeavy), -- 10
	('Superior Battlemage Armor', 3, @TypeLight), -- 11
	('Superior Prowler Armor', 3, @TypeMed), -- 12
	('Superior Battlemaster Armor', 3, @TypeHeavy), -- 13
	('Refined Battlemaster Mail', 4, @TypeHeavy), -- 14
	('Battlemage Armor Arms', 3, @TypeArms), -- 15
	('Battlemage Armor Legs', 3, @TypeLegs), -- 16
	('Prowler Armor Arms' ,3, @TypeArms), -- 17
	('Hunter Coat Legs', 2, @TypeLegs), -- 18
	('Battlemaster Armor Arms', 3, @TypeArms), -- 19
	('Battlemaster Armor Legs', 3, @TypeLegs), -- 20
	('Battlemaster Mail Arms', 3, @TypeArms), -- 21
	('Battlemaster Mail Legs', 3, @TypeLegs); -- 22
