
CREATE PROCEDURE p_Get_Decks
			 @FormatSupported Varchar(50) = null
			,@CreatedByPlayerId BIGINT = 0
AS
BEGIN

	SELECT 
		CAST(( 
			Select
				   a.[Name] '@Name'
				 , a.Id		'@Id'
				 , 'None'	'@Formats'
			FROM Decks a
			For xml path ('DeckSummary'),Root('Decks')
		) AS VARCHAR(MAX))

END
GO
