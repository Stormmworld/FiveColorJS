/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [id]
      ,[SetFk]
      ,[RarityFk]
      ,[Power]
      ,[Toughness]
      ,[Text]
      ,[ImageUrl]
      ,[Name]
  FROM [MTG].[dbo].[Cards]
  Where name like '%black lotus%'


  
DECLARE @OwnerId int = (Select top 1 Id from Owners Where [Owner] = 'yours')
DECLARE @TargetTypeId int = (Select top 1 Id from TargetTypes Where TargetType = 'self')
DECLARE @ActionId int = (Select top 1 Id from Actions Where Action = 'Destroy')
INSERT INTO [dbo].[CardEffects] ([CardFk],[OwnerFk],[TargetTypeFk],[ActionFk],[XValue])
	SELECT [id] 'CardFk'
		  ,@OwnerId
		  ,@TargetTypeId
		  ,@ActionId
		  ,3	'XValue'
	  FROM [MTG].[dbo].[Cards]
	  Where name like '%black lotus%'



DECLARE @TriggerId int = (Select top 1 Id from [Triggers] Where [Trigger] = 'tap')


INSERT INTO [dbo].[CardEffectTriggerTypes]
           ([CardEffectFk]
           ,[TriggerTypeFk])
Select   a.Id
		,@TriggerId
From [CardEffects] a
INNER JOIN [Cards] b
ON a.CardFk = b.id
	  Where name like '%black lotus%'
