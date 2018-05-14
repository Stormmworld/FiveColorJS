using System;
using FiveColorApi.Model;

namespace FiveColorApi.Classes
{
    public class Database
    {
        public static Player GetPlayer(int id)
        {
            return new Player()
            {
                Stats = new Stats()
                {
                 Id = id,
                 Name = "Test Player " + id.ToString()  
                }
            };
        }
    }
}