CREATE PROCEDURE p_Add_PlayerInfo
	 @DisplayName varchar(100),
	 @FirstName varchar(100),
	 @LastName varchar(100), 
	 @ImageUrl varchar(500)
AS
BEGIN
	SET NOCOUNT ON;
	INSERT INTO [dbo].[Players]
				([DisplayName]
				,[FirstName]
				,[LastName]
				,[ImageUrl])
			VALUES
				(@DisplayName
				,@FirstName
				,@LastName
				,@ImageUrl)
END