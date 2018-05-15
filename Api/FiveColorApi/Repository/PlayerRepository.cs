using FiveColorApi.Model;
using System.IO;
using System.Data;
using System.Web.Http;
using System.Data.SqlClient;
using System.Xml.Serialization;

namespace FiveColorApi.Repository
{
    public class PlayerRepository
    {
        #region Constants
        const string CONNECTIONSTRING = "Data Source=HPPROLIANT;Initial Catalog=MTG;User Id=Sql_Mtg;Password = Mag!c;";
        #endregion

        #region Methods
        [HttpGet]
        public static PlayerDetails CreatePlayer(string displayName, string firstName, string lastName)
        {
            SqlConnection sqlConnection1 = new SqlConnection(CONNECTIONSTRING);
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "p_Add_PlayerInfo";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = sqlConnection1;
            cmd.Parameters.AddWithValue("@DisplayName", displayName);
            cmd.Parameters.AddWithValue("@FirstName", firstName);
            cmd.Parameters.AddWithValue("@LastName", lastName);
            sqlConnection1.Open();
            cmd.ExecuteNonQuery();
            return GetPlayer(displayName);
        }
        [HttpGet]
        public static PlayerDetails GetPlayer(string displayName)
        {
            PlayerDetails retVal = new PlayerDetails();

            SqlConnection sqlConnection1 = new SqlConnection(CONNECTIONSTRING);
            SqlCommand cmd = new SqlCommand();
            SqlDataReader reader;

            cmd.CommandText = "p_Get_PlayerInfo";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = sqlConnection1;
            cmd.Parameters.AddWithValue("@DisplayName", displayName);
            sqlConnection1.Open();

            reader = cmd.ExecuteReader();

            if (reader.Read())
            {
                FiveColorApi.Repository.Classes.Player result;
                var serializer = new XmlSerializer(typeof(DeckRepository));
                using (TextReader treader = new StringReader(reader[0].ToString()))
                    result = (FiveColorApi.Repository.Classes.Player)serializer.Deserialize(treader);
                retVal = new PlayerDetails()
                {
                    DisplayName = result.DisplayName,
                    Id = result.Id,
                    FirstName = result.FirstName,
                    LastName = result.LastName,
                };
            }            
            sqlConnection1.Close();
            return retVal;
        }
        [HttpGet]
        public static PlayerDetails ModifyPlayer(int id, string displayName, string firstName, string lastName)
        {
            SqlConnection sqlConnection1 = new SqlConnection(CONNECTIONSTRING);
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "p_Upd_PlayerInfo";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = sqlConnection1;
            cmd.Parameters.AddWithValue("@DisplayName", displayName);
            cmd.Parameters.AddWithValue("@FirstName", firstName);
            cmd.Parameters.AddWithValue("@LastName", lastName);
            cmd.Parameters.AddWithValue("@Id", id);
            sqlConnection1.Open();
            cmd.ExecuteNonQuery();
            return GetPlayer(displayName);
        }
        [HttpPost]
        public static void RemovePlayer(int id)
        {
            SqlConnection sqlConnection1 = new SqlConnection(CONNECTIONSTRING);
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "p_Upd_PlayerInfo";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Connection = sqlConnection1;
            cmd.Parameters.AddWithValue("@Id", id);
            sqlConnection1.Open();
            cmd.ExecuteNonQuery();
        }
        #endregion
    }
}