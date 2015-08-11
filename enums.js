var TeamFortress2 = require('./index.js');

TeamFortress2.GCGoodbyeReason = {
	GC_GOING_DOWN: 1,
	NO_SESSION: 2
};

TeamFortress2.TradeResponse = {
	Accepted: 0,
	Declined: 1,
	TradeBannedInitiator: 2,
	TradeBannedTarget: 3,
	TargetAlreadyTrading: 4,
	Disabled: 5,
	NotLoggedIn: 6,
	Cancel: 7,
	TooSoon: 8,
	TooSoonPenalty: 9,
	ConnectionFailed: 10,
	AlreadyTrading: 11,
	AlreadyHasTradeRequest: 12,
	NoResponse: 13,
	CyberCafeInitiator: 14,
	CyberCafeTarget: 15,
	SchoolLabInitiator: 16,
	SchoolLabTarget: 16,
	InitiatorBlockedTarget: 18,
	InitiatorNeedsVerifiedEmail: 20,
	InitiatorNeedsSteamGuard: 21,
	TargetAccountCannotTrade: 22,
	InitiatorSteamGuardDuration: 23,
	InitiatorPasswordResetProbation: 24,
	InitiatorNewDeviceCooldown: 25,
	OKToDeliver: 50
};

TeamFortress2.Class = {
	Scout: 1,
	Sniper: 2,
	Soldier: 3,
	Demoman: 4,
	Medic: 5,
	Heavy: 6,
	Pyro: 7,
	Spy: 8,
	Engineer: 9
};

TeamFortress2.ItemSlot = {
	Primary: 0,
	Secondary: 1,
	Melee: 2,
	// 3 appears to be unused
	Sapper: 4, // Sapper
	PDA: 5,
	PDA2: 6,
	Cosmetic1: 7,
	Cosmetic2: 8,
	Action: 9,
	Cosmetic3: 10,
	Taunt1: 11,
	Taunt2: 12,
	Taunt3: 13,
	Taunt4: 14,
	Taunt5: 15,
	Taunt6: 16,
	Taunt7: 17,
	Taunt8: 18
};

TeamFortress2.SortType = {
	"Quality": 3,
	"Type": 4,
	"Class": 101,
	"LoadoutSlot": 102
};

TeamFortress2.ItemFlags = {
	CannotTrade: (1 << 0),
	CannotCraft: (1 << 1),
	NotEcon: (1 << 3),
	Preview: (1 << 7)
};

TeamFortress2.ItemOrigin = {
	"TimedDrop": 0,
	"Achievement": 1,
	"Purchased": 2,
	"Traded": 3,
	"Crafted": 4,
	"StorePromotion": 5,
	"Gifted": 6,
	"SupportGranted": 7,
	"FoundInCrate": 8,
	"Earned": 9,
	"ThirdPartyPromotion": 10,
	"WrappedGift": 11,
	"HalloweenDrop": 12,
	"SteamPurchase": 13,
	"ForeignItem": 14,
	"CDKey": 15,
	"CollectionReward": 16,
	"PreviewItem": 17,
	"SteamWorkshopContribution": 18,
	"PeriodicScoreReward": 19,
	"MvMBadgeCompletionReward": 20,
	"MvMSquadSurplusReward": 21,
	"RecipeOutput": 22,
	"CompletedContract": 23
};

TeamFortress2.AcquisitionMethod = {
	"Found": 1,
	"Crafted": 2,
	"Traded": 3,
	"Purchased": 4,
	"FoundInCrate": 5,
	"Gifted": 6,
	"Earned": 9,
	"Refunded": 10,
	"GiftWrapped": 11,
	"PeriodicScoreReward": 16,
	"MvMBadgeCompletionReward": 17,
	"MvMSquadSurplusReward": 18,
	"HolidayGift": 19,
	"RecipeOutput": 21,
	"QuestOutput": 23
};
