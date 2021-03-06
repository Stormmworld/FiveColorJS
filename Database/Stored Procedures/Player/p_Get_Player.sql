USE [MTG]
GO
/****** Object:  StoredProcedure [dbo].[p_Get_PlayerInfo]    Script Date: 5/14/2018 9:03:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[p_Get_PlayerInfo](@DisplayName varchar(100))		
AS
BEGIN
	SET NOCOUNT ON;
	  SELECT [Id]
		    ,[DisplayName]
		    ,[FirstName]
		    ,[LastName]
		    ,[ImageUrl]
	  FROM [Players]
	  Where [DisplayName] = @DisplayName
END
