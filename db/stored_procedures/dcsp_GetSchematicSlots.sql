USE dcdb;

DROP PROCEDURE IF EXISTS dcsp_GetSchematicSlots;

DELIMITER //

CREATE PROCEDURE dcsp_GetSchematicSlots (
	SchematicId INT
)
BEGIN
	SELECT
		s.SlotId,
		s.SlotTypeId,
        st.SlotTypeName,
		s.MaterialTypeId,
        mt.MaterialTypeName,
        s.Quantity
	FROM
		Slot AS s
        INNER JOIN SlotType AS st ON st.SlotTypeId = s.SlotTypeId
        INNER JOIN MaterialType AS mt ON mt.MaterialTypeId = s.MaterialTypeId
	WHERE
		s.SchematicId = SchematicId
	ORDER BY
		s.SlotId;
END//

DELIMITER ;