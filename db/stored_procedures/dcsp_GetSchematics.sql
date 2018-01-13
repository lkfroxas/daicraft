USE dcdb;

DROP PROCEDURE IF EXISTS dcsp_GetSchematics;

DELIMITER //

CREATE PROCEDURE dcsp_GetSchematics (
	SchematicTypeId INT
)
BEGIN
	SELECT
		s.SchematicId,
        s.SchematicName
	FROM
		Schematic AS s
	WHERE
		s.SchematicTypeId = SchematicTypeId
	ORDER BY
		s.SchematicName;
END//