namespace FiveColorApi.Repository.Classes
{
// NOTE: Generated code may require at least .NET Framework 4.5 or .NET Core/Standard 2.0.
    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class DbDeck
    {

        private DeckCard[] cardsField;

        private string nameField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Card", IsNullable = false)]
        public DeckCard[] Cards
        {
            get { return this.cardsField; }
            set { this.cardsField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Name
        {
            get { return this.nameField; }
            set { this.nameField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCard
    {

        private DeckCardType[] typesField;

        private DeckCardSubType[] subTypesField;

        private DeckCardMana[] manaProductionField;

        private DeckCardManaCost manaCostField;

        private byte deckCardIdField;

        private uint idField;

        private string imageUrlField;

        private string nameField;

        private byte powerField;

        private bool powerFieldSpecified;

        private byte toughnessField;

        private bool toughnessFieldSpecified;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Type", IsNullable = false)]
        public DeckCardType[] Types
        {
            get { return this.typesField; }
            set { this.typesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("SubType", IsNullable = false)]
        public DeckCardSubType[] SubTypes
        {
            get { return this.subTypesField; }
            set { this.subTypesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("Mana", IsNullable = false)]
        public DeckCardMana[] ManaProduction
        {
            get { return this.manaProductionField; }
            set { this.manaProductionField = value; }
        }

        /// <remarks/>
        public DeckCardManaCost ManaCost
        {
            get { return this.manaCostField; }
            set { this.manaCostField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public byte DeckCardId
        {
            get { return this.deckCardIdField; }
            set { this.deckCardIdField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public uint id
        {
            get { return this.idField; }
            set { this.idField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string ImageUrl
        {
            get { return this.imageUrlField; }
            set { this.imageUrlField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Name
        {
            get { return this.nameField; }
            set { this.nameField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public byte Power
        {
            get { return this.powerField; }
            set { this.powerField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlIgnoreAttribute()]
        public bool PowerSpecified
        {
            get { return this.powerFieldSpecified; }
            set { this.powerFieldSpecified = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public byte Toughness
        {
            get { return this.toughnessField; }
            set { this.toughnessField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlIgnoreAttribute()]
        public bool ToughnessSpecified
        {
            get { return this.toughnessFieldSpecified; }
            set { this.toughnessFieldSpecified = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCardType
    {

        private string typeField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Type
        {
            get { return this.typeField; }
            set { this.typeField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCardSubType
    {

        private string subTypeField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string SubType
        {
            get { return this.subTypeField; }
            set { this.subTypeField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCardMana
    {

        private byte quantityField;

        private string abbreviationField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public byte Quantity
        {
            get { return this.quantityField; }
            set { this.quantityField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string Abbreviation
        {
            get { return this.abbreviationField; }
            set { this.abbreviationField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCardManaCost
    {

        private DeckCardManaCostMana manaField;

        /// <remarks/>
        public DeckCardManaCostMana Mana
        {
            get { return this.manaField; }
            set { this.manaField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class DeckCardManaCostMana
    {

        private string costField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string cost
        {
            get { return this.costField; }
            set { this.costField = value; }
        }
    }

}