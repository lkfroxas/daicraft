USE dcdb;

DROP PROCEDURE IF EXISTS dcsp_GetMaterials;

DELIMITER //

CREATE PROCEDURE dcsp_GetMaterials (
	Tier INT,
    MaterialTypeId INT,
    PropertyId INT
)
BEGIN
	SELECT
		m.MaterialId,
        m.MaterialName
	FROM
		Material AS m
        INNER JOIN MaterialProperty AS mp ON mp.MaterialId = m.MaterialId
	WHERE
		m.Tier = Tier
        AND m.MaterialTypeId = MaterialTypeId
        AND mp.PropertyId = PropertyId
	ORDER BY
		m.MaterialName;
END//

DELIMITER ;