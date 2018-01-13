DROP DATABASE IF EXISTS dcdb;
CREATE DATABASE dcdb;
USE dcdb;

CREATE TABLE Schematic (
  SchematicId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  SchematicName NVARCHAR(50) NOT NULL,
  Tier INT UNSIGNED NOT NULL,
  SchematicTypeId INT UNSIGNED NOT NULL
);

CREATE TABLE Slot (
  SlotId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  SchematicId INT UNSIGNED NOT NULL,
  SlotTypeId INT UNSIGNED NOT NULL,
  MaterialTypeId INT UNSIGNED NOT NULL,
  Quantity INT UNSIGNED NOT NULL
);

CREATE TABLE Material (
  MaterialId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  MaterialName NVARCHAR(50) NOT NULL,
  Tier INT UNSIGNED NOT NULL,
  MaterialTypeId INT UNSIGNED NOT NULL
);

CREATE TABLE Property (
  PropertyId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  PropertyName NVARCHAR(50) NOT NULL,
  SlotTypeId INT UNSIGNED NOT NULL
);

CREATE TABLE MaterialProperty (
  MaterialPropertyId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  MaterialId INT UNSIGNED NOT NULL,
  PropertyId INT UNSIGNED NOT NULL
);

CREATE TABLE SchematicType (
  SchematicTypeId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  SchematicTypeName NVARCHAR(50) NOT NULL
);

CREATE TABLE SlotType (
  SlotTypeId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  SlotTypeName NVARCHAR(50) NOT NULL
);

CREATE TABLE MaterialType (
  MaterialTypeId INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  MaterialTypeName NVARCHAR(50) NOT NULL
);

INSERT INTO SchematicType (SchematicTypeName) VALUES
  ('Staff'),
  ('Bow'),
  ('Dagger'),
  ('1-Handed Weapon'),
  ('2-Handed Weapon'),
  ('Shield'),
  ('Weapon Upgrade'),
  ('Light Armor'),
  ('Medium Armor'),
  ('Heavy Armor'),
  ('Arms'),
  ('Legs');

INSERT INTO SlotType (SlotTypeName) VALUES
  ('Main'),
  ('Offense'),
  ('Defense'),
  ('Utility');

INSERT INTO MaterialType (MaterialTypeName) VALUES
  ('Cloth'),
  ('Leather'),
  ('Metal');
