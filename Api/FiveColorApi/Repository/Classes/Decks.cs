using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FiveColorApi.Repository.Classes
{
    /// <remarks/>
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class Decks
    {

        private DecksDeckSummary deckSummaryField;

        /// <remarks/>
        public DecksDeckSummary DeckSummary
        {
            get
            {
                return this.deckSummaryField;
            }
            set
            {
                this.deckSummaryField = value;
            }
        }
    }

    /// <remarks/>
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DecksDeckSummary
    {

        private string nameField;

        private byte idField;

        private string formatsField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Name
        {
            get
            {
                return this.nameField;
            }
            set
            {
                this.nameField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public byte Id
        {
            get
            {
                return this.idField;
            }
            set
            {
                this.idField = value;
            }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Formats
        {
            get
            {
                return this.formatsField;
            }
            set
            {
                this.formatsField = value;
            }
        }
    }


}