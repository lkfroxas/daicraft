USE dcdb;

DROP PROCEDURE IF EXISTS dcsp_GetSchematicTypes;

DELIMITER //

CREATE PROCEDURE dcsp_GetSchematicTypes ()
BEGIN
	SELECT
		st.SchematicTypeId,
        st.SchematicTypeName
	FROM
		SchematicType AS st
	WHERE
		EXISTS (SELECT 1 FROM Schematic AS s WHERE s.SchematicTypeId = st.SchematicTypeId)
	ORDER BY
		st.SchematicTypeId;
END//