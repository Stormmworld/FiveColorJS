using System.Collections.Generic;
using FiveColorApi.Model;

namespace FiveColorApi.Mocker
{
    public static class Mock
    {
        public static Card GetMockCard()
        {
            return new Card() {
                enabled=true,
                image= "https://img.scryfall.com/cards/normal/en/leb/231.jpg",
                Name= "Ankh of Mishra",
                tapped=false,
                Types=new List<string>() { "Artifact" }
            };
        }

        public static Model.Deck GetMockDeck()
        {

            Model.Deck retVal = new Model.Deck()
            {
                Cards = new List<Card>(),
                Name = "Mock Deck"
            };
            for (int i = 0; i < 60; i++)
            {
                retVal.Cards.Add(GetMockCard());
            }
            return retVal;
        }
    }
}
