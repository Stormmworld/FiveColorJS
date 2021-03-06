USE [MTG]
GO
/****** Object:  StoredProcedure [dbo].[p_Get_Deck]    Script Date: 4/23/2018 7:12:26 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[p_Get_Deck] (@DeckId BIGINT = 1)
AS
BEGIN
	SET NOCOUNT ON;
	SELECT 
		CAST(( 
		--DECLARE @DeckId BIGINT = 1
			Select
				 a.[Name] '@Name'
				,(
					Select 
						ROW_NUMBER() OVER(ORDER BY c.id) as DeckCardId,
						c.id,
						c.ImageUrl,
						c.[Name],
						c.[Power],
						c.Toughness,
						(				 
							Select 
								e.[Type]
							From CardTypes d
							INNER JOIN [Types] e
							  on d.TypeFk = e.Id
							Where c.id = d.CardFk
							For xml raw('Type'),type 

						) 'Types',
						(				 
							Select 
								g.[SubType]
							From CardSubTypes f
							INNER JOIN [SubTypes] g
							  on f.SubTypeFk = g.Id
							Where c.id = f.CardFk
							For xml raw('SubType'),Type 

						) 'SubTypes',
						(
							Select 
								h.Quantity,
								i.Abbreviation--,
								--i.ImageUrl
							From CardManaProduction h
							inner join Colors i
							  on h.ColorFk = i.ID
							Where h.CardFk = c.id
							For xml raw('Mana'),Type 
						) 'ManaProduction',
						(
							Select j.cost
							From ManaCost j
							Where j.CardFk = c.id
							For xml raw('Mana'),Type 
						) 'ManaCost',
						(
							Select  m.[Owner],
									l.TargetType,
									n.[Action],
									k.XValue,
									(
										Select p.[Trigger]
										From CardEffectTriggerTypes o
										INNER JOIN [Triggers] p
										  ON o.TriggerTypeFk = p.Id
										Where o.CardEffectFk = k.Id
										For xml raw('Trigger'),Type 
									) 'Triggers'
							From CardEffects k
							INNER JOIN TargetTypes l
							  ON k.TargetTypeFk = l.Id
							INNER JOIN Owners m
							  ON k.OwnerFk = m.Id
							INNER JOIN Actions n
							  ON k.ActionFk = n.Id
							Where k.CardFk = c.id
							For xml raw('Effect'),Type 
						) 'Effects'
					FROM DeckCards b
					INNER JOIN cards c
					 ON b.CardFk = c.id
					where a.Id = b.DeckFk
					For xml raw('Card'),type 
				) 'Cards'
			FROM Decks a
			where a.Id = @DeckId
			For xml path ('Deck')
		) AS VARCHAR(MAX))
END
