using System;
using System.Collections.Generic;
using System.Linq;
using FiveColorApi.Classes.Enumerations;
using FiveColorApi.Model;
using Newtonsoft.Json;
using Phase = FiveColorApi.Model.Phase;
using Player = FiveColorApi.Model.Player;

namespace FiveColorApi.Classes
{
    public class Game
    {
        #region Properties
        [JsonProperty(PropertyName = "ActiveStack")]
        public List<StackEntry> ActiveStack { get; set; }
        [JsonProperty(PropertyName = "Id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "LandsPlayedThisturn")]
        public int LandsPlayedThisturn { get; set; }
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "Players")]
        public List<Player> Players { get; set; }
        [JsonProperty(PropertyName = "Phase")]
        public Phase Phase { get; set; }
        [JsonProperty(PropertyName = "Rules")]
        public Rules Rules { get; set; }
        [JsonProperty(PropertyName = "Status")]
        public Status Status { get; set; }
        #endregion 

        #region Methods
        public void DrawPhase()
        {
            var currentPlayer = Players.FirstOrDefault(o => o.Stats.Id == Phase.CurrentPlayerId);
            if(currentPlayer == null)
                throw new Exception("Player not found");

            if (currentPlayer.Library.Count < Rules.DrawCount)
            {
                currentPlayer.LoseCondition = LoseCondition.NocardsInLibrary;
                throw new Exception("Death");
            }

            for (int i = 0; i < Rules.DrawCount; i++)
            {
                var currentCard = currentPlayer.Library[0];
                currentPlayer.Hand.Add(currentCard);
                currentPlayer.Library.RemoveAt(0);
            }
        }
        public void EndPhase()
        {
            switch (Phase.PhaseName)
            {
                case Enumerations.Phase.Beginning:
                    switch (Phase.SubPhaseName)
                    {
                        case SubPhase.Untap:
                            Phase.SubPhaseName = SubPhase.Upkeep;
                            break;
                        case SubPhase.Upkeep:
                            Phase.SubPhaseName = SubPhase.Draw;
                            break;
                        case SubPhase.Draw:
                            Phase.PhaseName = Enumerations.Phase.Main1;
                            Phase.SubPhaseName = SubPhase.None;
                            break;
                    }
                    break;
                case Enumerations.Phase.Main1:
                    Phase.PhaseName = Enumerations.Phase.Combat;
                    Phase.SubPhaseName = SubPhase.AttackDeclaration;
                    break;
                case Enumerations.Phase.Combat:
                    switch (Phase.SubPhaseName)
                    {
                        case SubPhase.AttackDeclaration:
                            Phase.SubPhaseName = SubPhase.DefenseDeclaration;
                            break;
                        case SubPhase.DefenseDeclaration:
                            Phase.SubPhaseName = SubPhase.DamageResolution;
                            break;
                        case SubPhase.DamageResolution:
                            Phase.PhaseName = Enumerations.Phase.Main2;
                            Phase.SubPhaseName = SubPhase.None;
                            break;
                    }
                    break;
                case Enumerations.Phase.Main2:
                    Phase.PhaseName = Enumerations.Phase.Discard;
                    break;
                case Enumerations.Phase.Discard:
                    Phase.PhaseName = Enumerations.Phase.Ending;
                    break;
                case Enumerations.Phase.Ending:
                    EndTurn();
                    break;
            }
        }
        public void EndTurn()
        {
            Player nextPlayer = GetNextPlayer();
            Phase.PhaseName = Enumerations.Phase.Beginning;
            Phase.SubPhaseName = SubPhase.Untap;
            Phase.CurrentPlayer = nextPlayer.Stats.Name;
            Phase.CurrentPlayerId = nextPlayer.Stats.Id;
        }
        public Player GetNextPlayer()
        {
            for (int i = 0; i < Players.Count; i++)
            {
                if (Players[i].Stats.Id == Phase.CurrentPlayerId)
                {
                    for (int j = i + 1; j < Players.Count; j++) // check next element to end of list
                        if (Players[j].LoseCondition == LoseCondition.None)
                            return Players[j];
                    for (int j = 0; j < i; j++)//check first element until the current element 
                        if (Players[j].LoseCondition == LoseCondition.None)
                            return Players[j];
                    break;//end search for current player
                }
            }
            throw new Exception("Next Player not found");
        }
        public List<Card> GetUpkeepCards()
        {
            List<Card> retVal = new List<Card>();

            foreach (Player player in Players)
                foreach (Card card in player.BattleField)
                    if(card.Effects.FirstOrDefault(o=>o.Triggers.Contains(Trigger.Upkeep)) != null)
                            retVal.Add(card);
            return retVal;
        }
        public void Selectdeck(int playerId, long deckId)
        {

        }
        #endregion
    }
}