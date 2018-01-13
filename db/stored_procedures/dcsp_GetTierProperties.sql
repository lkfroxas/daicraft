USE dcdb;

DROP PROCEDURE IF EXISTS dcsp_GetTierProperties;

DELIMITER //

CREATE PROCEDURE dcsp_GetTierProperties (
	Tier INT,
    SlotTypeId INT,
    MaterialTypeId INT
)
BEGIN
	SELECT DISTINCT
		p.PropertyId,
        p.PropertyName
	FROM
		Property AS p
        INNER JOIN MaterialProperty AS mp ON mp.PropertyId = p.PropertyId
        INNER JOIN Material AS m on m.MaterialId = mp.MaterialId
	WHERE
		m.Tier = Tier
        AND p.SlotTypeId = SlotTypeId
        AND m.MaterialTypeId = MaterialTypeId
	ORDER BY
		p.PropertyName;
END//

DELIMITER ;