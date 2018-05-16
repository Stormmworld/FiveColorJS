CREATE PROCEDURE p_Upd_PlayerInfo 
	 @Id int,
	 @DisplayName varchar(100),
	 @FirstName varchar(100),
	 @LastName varchar(100), 
	 @ImageUrl varchar(500)
AS
BEGIN
	SET NOCOUNT ON;
	UPDATE [dbo].[Players]
	   SET [DisplayName] = @DisplayName
		  ,[FirstName] = @FirstName
		  ,[LastName] = @LastName
		  ,[ImageUrl] = @ImageUrl
	 WHERE Id = @Id
END
GO
