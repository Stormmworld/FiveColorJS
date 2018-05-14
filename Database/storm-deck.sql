IF(NOT EXISTS(Select Id FROM [Sets] WHERE [Code] = '5CP'))
	INSERT INTO [dbo].[Sets] ([Name],[Code],[ReleaseDate],[Border],[type]) VALUES ('5 Color Promotional','5CP','','black','promo')
IF(NOT EXISTS(Select Id FROM [Cards] WHERE [Name] = 'Mox Crystal'))
	BEGIN
		INSERT INTO [dbo].[Cards] ([id],[SetFk],[RarityFk],[Power],[Toughness],[Text],[ImageUrl],[Name]) VALUES (-1,(Select Id FROM [Sets] WHERE [Code] = '5CP'),9,null,null,'Add 1 colorless mana to your mana pool. Tapping this artifact can be played as an interrupt','','Mox Crystal')
		Declare @MoxCrystalId bigint = SCOPE_IDENTITY()
		INSERT INTO [dbo].[CardManaProduction] ([CardFk],[ColorFk],[Quantity]) VALUES (@MoxCrystalId,(SELECT [ID] FROM [dbo].[Colors] WHERE [Color] = 'Colorless'),1)
	END
begin tran

DECLARE @stormDeckId bigint
Select @stormDeckId = Id From Decks Where [Name] = 'Storm: 5-Color'
IF(Exists(Select Id From Decks Where [Name] = 'Storm: 5-Color'))
	BEGIN
		Delete From DeckCards Where DeckFk = @stormDeckId
	END
ELSE
	BEGIN
		INSERT INTO [dbo].[Decks] ([Name]) VALUES ('storm: 5-Color')
		SET @stormDeckId = SCOPE_IDENTITY()
	END

INSERT INTO [dbo].[DeckCards]([DeckFk],[CardFk])
     VALUES (@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Underground Sea'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Underground Sea'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Underground Sea'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Underground Sea'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tropical Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tropical Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tropical Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tropical Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tundra'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tundra'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tundra'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tundra'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exotic Orchard'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exotic Orchard'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exotic Orchard'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exotic Orchard'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reflecting Pool'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reflecting Pool'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reflecting Pool'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reflecting Pool'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reliquary Tower'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reliquary Tower'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reliquary Tower'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Reliquary Tower'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zoetic Cavern'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zoetic Cavern'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zoetic Cavern'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zoetic Cavern'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Vesuva'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Vesuva'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Vesuva'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Vesuva'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sunken Hollow'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sunken Hollow'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sunken Hollow'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sunken Hollow'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Prairie Stream'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Prairie Stream'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Prairie Stream'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Prairie Stream'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Misty Rainforest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Misty Rainforest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Misty Rainforest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Misty Rainforest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Polluted Delta'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Polluted Delta'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Polluted Delta'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Polluted Delta'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Smoldering Marsh'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Smoldering Marsh'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Smoldering Marsh'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Smoldering Marsh'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Wooded Foothills'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Wooded Foothills'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Wooded Foothills'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Wooded Foothills'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Arid Mesa'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Arid Mesa'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Arid Mesa'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Arid Mesa'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flooded Strand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flooded Strand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flooded Strand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flooded Strand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Terramorphic Expanse'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Terramorphic Expanse'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Terramorphic Expanse'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Terramorphic Expanse'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Scalding Tarn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Scalding Tarn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Scalding Tarn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Scalding Tarn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flood Plain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flood Plain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flood Plain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flood Plain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Forest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Forest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Forest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Forest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Island'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mountain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mountain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mountain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mountain'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Swamp'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Swamp'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Swamp'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Swamp'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Plains'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Plains'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Plains'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Plains'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tolarian Academy'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Library of Alexandria'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sol Ring'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Crucible of Worlds'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mox emerald'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox crystal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox ruby'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox pearl'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox jet'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'black lotus'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox opal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox opal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox opal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'mox opal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Crop rotation'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Transguild Courier'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Transguild Courier'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Transguild Courier'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Transguild Courier'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Conflux'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Conflux'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Conflux'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Conflux'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fusion Elemental'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fusion Elemental'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fusion Elemental'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fusion Elemental'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Last Stand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Last Stand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Last Stand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Last Stand'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Maelstrom Archangel'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Maelstrom Archangel'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Maelstrom Archangel'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Maelstrom Archangel'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'The Ur-Dragon'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'The Ur-Dragon'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'The Ur-Dragon'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'The Ur-Dragon'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Muldrotha, the Gravetide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Muldrotha, the Gravetide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Jodah, Archmage Eternal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Jodah, Archmage Eternal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ancestral Recall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Timetwister'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Time Walk'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fabricate'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Intuition'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Merchant Scroll'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mystical Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Personal Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fastbond'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Eternal Witness'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Regrowth'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Survival of the Fittest'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sylvan Scrying'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Vampiric Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Imperial Seal'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Demonic Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Wheel of Fortune'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Enlightened Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Panoptic Mirror'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Isochron Scepter'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Library of Leng'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Library of Leng'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Library of Leng'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Library of Leng'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradoxical Outcome'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradoxical Outcome'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradoxical Outcome'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradoxical Outcome'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hurkyl''s Recall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hurkyl''s Recall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hurkyl''s Recall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hurkyl''s Recall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Phyrexian Walker'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Phyrexian Walker'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Phyrexian Walker'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Phyrexian Walker'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ornithopter'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ornithopter'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ornithopter'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ornithopter'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradise Mantle'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradise Mantle'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradise Mantle'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Paradise Mantle'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Birds of Paradise'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Birds of Paradise'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Birds of Paradise'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Birds of Paradise'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flusterstorm'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flusterstorm'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flusterstorm'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Flusterstorm'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hindering Touch'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hindering Touch'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hindering Touch'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hindering Touch'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mind''s Desire'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mind''s Desire'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mind''s Desire'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Mind''s Desire'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sprouting Vines'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sprouting Vines'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sprouting Vines'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Sprouting Vines'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tendrils of Agony'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tendrils of Agony'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tendrils of Agony'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tendrils of Agony'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Awakening'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Awakening'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Awakening'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Volcanic Awakening'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hunting Pack'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hunting Pack'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hunting Pack'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Hunting Pack'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ignite Memories'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ignite Memories'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ignite Memories'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ignite Memories'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Grapeshot'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Grapeshot'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Grapeshot'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Grapeshot'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Train of Thought'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Train of Thought'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Train of Thought'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Train of Thought'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Consecrated Sphinx'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Consecrated Sphinx'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Consecrated Sphinx'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Consecrated Sphinx'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bringer of the Blue Dawn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bringer of the Blue Dawn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bringer of the Blue Dawn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bringer of the Blue Dawn'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ainok Guide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ainok Guide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ainok Guide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Ainok Guide'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Beseech the Queen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Beseech the Queen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Beseech the Queen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Beseech the Queen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Archmage Ascension'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Archmage Ascension'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Archmage Ascension'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Archmage Ascension'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Clarion Ultimatum'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Clarion Ultimatum'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Clarion Ultimatum'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Clarion Ultimatum'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Cultivate'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Cultivate'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Cultivate'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Cultivate'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Diabolic Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Diabolic Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Diabolic Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Diabolic Tutor'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Countersquall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Countersquall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Countersquall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Countersquall'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Counterspell'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Counterspell'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Counterspell'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Counterspell'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Absorb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Absorb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Absorb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Absorb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fountain of Youth'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fountain of Youth'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fountain of Youth'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Fountain of Youth'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Spellbook'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Spellbook'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Spellbook'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Spellbook'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zuran Orb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zuran Orb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zuran Orb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Zuran Orb'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tormod''s Crypt'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tormod''s Crypt'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tormod''s Crypt'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Tormod''s Crypt'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Dragonlord Dromoka'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Dragonlord Dromoka'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Darigaaz Reincarnated'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Darigaaz Reincarnated'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Atarka, World Render'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Atarka, World Render'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bladewing the Risen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Bladewing the Risen'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exploration'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Exploration'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Azusa, Lost but Seeking'))
	       ,(@stormDeckId ,(Select top 1 Id from Cards Where [Name] = 'Azusa, Lost but Seeking'))

rollback tran
--commit tran