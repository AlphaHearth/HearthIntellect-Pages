var mechanics = [1: {"id":1,"name":"Battlecry","description":"Does something when you play it from your hand."},
2: {"id":2,"name":"Charge","description":"Can attack immediately."},
3: {"id":3,"name":"Combo","description":"A bonus if you already played a card this turn."},
4: {"id":4,"name":"Deathrattle","description":"Does something when it dies."},
5: {"id":5,"name":"Divine Shield","description":"The first time this minion takes damage, ignore it."},
6: {"id":6,"name":"Enrage","description":"While damaged, this minion has a new power."},
7: {"id":7,"name":"Freeze","description":"Frozen characters lose their next attack."},
8: {"id":8,"name":"Grant Charge","description":""},
9: {"id":9,"name":"Overload: X","description":"You have X less mana next turn."},
10: {"id":10,"name":"Spell Damage","description":"Your spell cards deal # extra damage."},
11: {"id":11,"name":"Secret","description":"Hidden until a specific action occurs on your opponent's turn."},
12: {"id":12,"name":"Silence","description":"Removes all card text and enchantments."},
13: {"id":13,"name":"Stealth","description":"Can't be attacked or targeted until it deals damage."},
14: {"id":14,"name":"Taunt","description":"Enemies must attack this minion."},
15: {"id":15,"name":"Windfury","description":"Can attack twice each turn."},
16: {"id":16,"name":"Counter","description":"A card that is Countered has no effect."},
17: {"id":17,"name":"Immune","description":"Can't be damaged."},
18: {"id":18,"name":"Draw Cards","description":"Draws additional card(s) from the deck."},
19: {"id":19,"name":"Discard","description":"Removes cards before they can be played."},
20: {"id":20,"name":"Buff Stats","description":"Increases the health and/or attack of a character or weapon."},
21: {"id":21,"name":"Choose One","description":"Select one effect from the list of options."},
22: {"id":22,"name":"Destroy","description":"Removes something from the battlefield, regardless of its remaining health or effects."},
23: {"id":23,"name":"Summon","description":"Places another minion on the battlefield."},
24: {"id":24,"name":"Copy","description":"Creates a duplicate of another card or minion."},
25: {"id":25,"name":"Can't Attack","description":""},
26: {"id":26,"name":"Take Control","description":"Forces a minion to be controlled by its enemy."},
27: {"id":27,"name":"Transform","description":"Causes one minion to become another minion."},
28: {"id":28,"name":"Restore Health","description":"Increases a character's remaining health, but not beyond its maximum health."},
29: {"id":29,"name":"Change Cost","description":"Changes the amount of mana crystals required to play certain cards."},
30: {"id":30,"name":"Change Stats","description":"Sets characters' attack or health to a specific value."},
31: {"id":31,"name":"Mana Crystals","description":"Changes the amount of available mana crystals for a player."},
32: {"id":32,"name":"Deal Damage","description":"Inflicts some amount of damage to character(s)."},
33: {"id":33,"name":"Damage All","description":"Inflicts some amount of damage to your characters as well as your enemy's characters."},
34: {"id":34,"name":"Damage Enemies","description":"Inflicts some amount of damage to your enemy's characters."},
35: {"id":35,"name":"Return to Hand","description":"Removes a card from play and puts it back into the hand of cards not yet played."},
36: {"id":36,"name":"Gain Armor","description":"Increases the armor value of a hero."},
37: {"id":37,"name":"Poisonous","description":"Destroy any minion damaged by this minion."},
38: {"id":38,"name":"Immune To Spell Damage","description":"Not affected by increased spell damage."},
39: {"id":39,"name":"Affected By Spell Damage","description":"Damage increased by spell damage."},
40: {"id":40,"name":"Spare Parts","description":"Spare Parts are 1-cost spells with minor effects."},
41: {"id":41,"name":"Inspire","description":"Does something after you use your Hero Power."},
42: {"id":42,"name":"Discover","description":"Choose one of three cards to add to your hand."}];

var classs = {
	"DRUID": "Druid",
	"HUNTER": "Hunter",
	"MAGE": "Mage",
	"PALADIN": "Paladin",
	"PRIEST": "Priest",
	"ROGUE": "Rogue",
	"SHAMAN": "Shaman",
	"WARLOCK": "Warlock",
	"WARRIOR": "Warrior",
	"NEUTRAL": "Neutral"
}

var quality = {
	"FREE": "Free",
	"COMMON": "Common",
	"RARE": "Rare",
	"EPIC": "Epic",
	"LEGENDARY": "Legendary"
}

var type = {
	"HERO": "Hero",
	"MINION": "Minion",
	"SPELL": "Spell",
	"WEAPON": "Weapon",
	"HEROPOWER": "Hero Power"
}

var race = {
	"NONE": "None",
	"BEAST": "Beast",
	"DEMON": "Demon",
	"DRAGON": "Dragon",
	"MECH": "Mech",
	"MURLOC": "Murloc",
	"PIRATE": "Pirate",
	"TOTEM": "Totem"
}

var set = {
	"BASIC": "Basic",
	"CLASSIC": "Classic",
	"REWARD": "Reward",
	"MISSIONS": "Missions",
	"PROMOTION": "Promotion",
	"CREDITS": "Credits",
	"ALTERNATIVEHEROS": "Alternative Heros",
	"TAVERNBRAWL": "Tavern Brawl",
	"NAXXRAMAS": "Naxxramas",
	"GOBLINSVSGNOMES": "Goblins vs. Gnomes",
	"BLACKROCKMOUNTAIN": "Blackrock Mountain",
	"THEGRANDTOURNAMENT": "The Grand Tournament",
	"LEAGUEOFEXPLORERS": "League of Explorers",
	"WHISPEROFTHEOLDGODS": "Whisper of the Old Gods",
	"ONENIGHTINKARAZHAN": "One Night in Karazhan"
}
