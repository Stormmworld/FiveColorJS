namespace FiveColorApi.Classes.Enumerations
{
    public enum Action
    {
        None,
        DealDamage,
        AddLife,
        PreventDamage,
        DrawXCards,
        Destroy,
    }
    public enum Format
    {
        None,
        All,
        FiveColor,
        Standard
    }
    public enum Locations
    {
        None = 0,
        BattleField = 1,
        GraveYard = 2,
        Hand = 3,
        Lands = 4,
        Exile = 5,
        Stack = 6
    }
    public enum LoseCondition
    {
        None,
        NocardsInLibrary,
    }
    public enum Owner
    {
        None,
        Any,
        Yours,
        Opponents,
        All,
    }
    public enum Phase
    {
        None,
        Beginning,
        Main1,
        Combat,
        Main2,
        Discard,
        Ending,
    }
    public enum SubPhase
    {
        None,
        Untap,
        Upkeep,
        Draw,
        AttackDeclaration,
        DefenseDeclaration,
        DamageResolution,
    }
    public enum Status
    {
        None,
        WaitingRoom,
        Active
    }
    public enum TargetType
    {
        None,
        Artifact,
        Land,
        Creature,
        Planeswalker,
        Player,
        Enchantment,
        Equipment,
        Permanent,
        Hand,
        Library,
        Self,
    }
    public enum Trigger
    {
        None,
        EnterBattleField,
        Tap,
        TakesDamage,
        DealsDamage,
        DealsDamageToPlayer,
        Upkeep,
    }
}