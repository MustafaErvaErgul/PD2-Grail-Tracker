export const ARMOR_TYPES = [
  { category: "Armor", subCategory: "Helmet", type: "helm", type2: "" },
  { category: "Armor", subCategory: "Chest", type: "tors", type2: "" },
  { category: "Armor", subCategory: "Gloves", type: "glov", type2: "" },
  { category: "Armor", subCategory: "Boots", type: "boot", type2: "" },
  { category: "Armor", subCategory: "Belt", type: "belt", type2: "" },
  { category: "Armor", subCategory: "Belt", type: "bels", type2: "" },
  { category: "Armor", subCategory: "Circlet", type: "circ", type2: "" },
  { category: "Armor", subCategory: "Shield", type: "shie", type2: "" }
]

export const WEAPON_TYPES = [
  { category: "Weapon", subCategory: "Axe(1-H)", type: "axe", type2: "" },
  { category: "Weapon", subCategory: "Axe(2-H)", type: "axe", type2: "2han" },
  { category: "Weapon", subCategory: "Bow", type: "bow", type2: "" },
  { category: "Weapon", subCategory: "Crossbow", type: "xbow", type2: "" },
  { category: "Weapon", subCategory: "Clubs(1-H)", type: "club", type2: "" },
  { category: "Weapon", subCategory: "Clubs(1-H)", type: "mace", type2: "" },
  { category: "Weapon", subCategory: "Clubs(1-H)", type: "hamm", type2: "" },
  { category: "Weapon", subCategory: "Clubs(2-H)", type: "club", type2: "2han" },
  { category: "Weapon", subCategory: "Clubs(2-H)", type: "hamm", type2: "2han" },
  { category: "Weapon", subCategory: "Dagger", type: "knif", type2: "" },
  { category: "Weapon", subCategory: "Polearm", type: "pole", type2: "2han" },
  { category: "Weapon", subCategory: "Polearm", type: "sc9", type2: "2han" },
  { category: "Weapon", subCategory: "Scepter", type: "scep", type2: "" },
  { category: "Weapon", subCategory: "Spear", type: "spea", type2: "2han" },
  { category: "Weapon", subCategory: "Staves", type: "staf", type2: "2han" },
  { category: "Weapon", subCategory: "Sword(1-H)", type: "swor", type2: "" },
  { category: "Weapon", subCategory: "Sword(1-H)", type: "swor", type2: "crys" },
  { category: "Weapon", subCategory: "Sword(2-H)", type: "swor", type2: "2hsw" },
  { category: "Weapon", subCategory: "Throwing", type: "tkni", type2: "" },
  { category: "Weapon", subCategory: "Throwing", type: "taxe", type2: "" },
  { category: "Weapon", subCategory: "Throwing", type: "jave", type2: "" },
  { category: "Weapon", subCategory: "ThrowingPotion", type: "tpot", type2: "" },
  { category: "Weapon", subCategory: "Wand", type: "wand", type2: "" }
]

export const OTHER_TYPES = [
  { category: "Other", subCategory: "Amulet", type: "amu", type2: "" },
  { category: "Other", subCategory: "Ring", type: "rin", type2: "" },
  { category: "Other", subCategory: "Amazon", type: "abow", type2: "" },
  { category: "Other", subCategory: "Amazon", type: "aspe", type2: "2han" },
  { category: "Other", subCategory: "Amazon", type: "ajav", type2: "" },
  { category: "Other", subCategory: "Assassin", type: "h2h", type2: "" },
  { category: "Other", subCategory: "Assassin", type: "h2h2", type2: "" },
  { category: "Other", subCategory: "Barbarian", type: "phlm", type2: "" },
  { category: "Other", subCategory: "Druid", type: "pelt", type2: "" },
  { category: "Other", subCategory: "Necromancer", type: "head", type2: "" },
  { category: "Other", subCategory: "Paladin", type: "ashd", type2: "" },
  { category: "Other", subCategory: "Sorceress", type: "orb", type2: "" },
  { category: "Other", subCategory: "Charm", type: "cm3", type2: "" },
  { category: "Other", subCategory: "Charm", type: "cm2", type2: "" },
  { category: "Other", subCategory: "Charm", type: "cm1", type2: "" },
  { category: "Other", subCategory: "Jewel", type: "jew", type2: "" }
]

export const PD2_TYPES = [
  { category: "Other", subCategory: "Map", type: "t51", type2: "" },
  { category: "Other", subCategory: "Map", type: "t52", type2: "" },
  { category: "Other", subCategory: "Map", type: "t53", type2: "" },
  { category: "Other", subCategory: "Amulet", type: "ram", type2: "" }
]

export const ITEM_TYPES = [...ARMOR_TYPES, ...WEAPON_TYPES, ...OTHER_TYPES, ...PD2_TYPES]

export const RUNES = [
  { code: "r01", name: "El Rune", displayName: "El Rune", rarity: "Rune", databaseIndex: "Rune/El Rune" },
  { code: "r02", name: "Eld Rune", displayName: "Eld Rune", rarity: "Rune", databaseIndex: "Rune/Eld Rune" },
  { code: "r03", name: "Tir Rune", displayName: "Tir Rune", rarity: "Rune", databaseIndex: "Rune/Tir Rune" },
  { code: "r04", name: "Nef Rune", displayName: "Nef Rune", rarity: "Rune", databaseIndex: "Rune/Nef Rune" },
  { code: "r05", name: "Eth Rune", displayName: "Eth Rune", rarity: "Rune", databaseIndex: "Rune/Eth Rune" },
  { code: "r06", name: "Ith Rune", displayName: "Ith Rune", rarity: "Rune", databaseIndex: "Rune/Ith Rune" },
  { code: "r07", name: "Tal Rune", displayName: "Tal Rune", rarity: "Rune", databaseIndex: "Rune/Tal Rune" },
  { code: "r08", name: "Ral Rune", displayName: "Ral Rune", rarity: "Rune", databaseIndex: "Rune/Ral Rune" },
  { code: "r09", name: "Ort Rune", displayName: "Ort Rune", rarity: "Rune", databaseIndex: "Rune/Ort Rune" },
  { code: "r10", name: "Thul Rune", displayName: "Thul Rune", rarity: "Rune", databaseIndex: "Rune/Thul Rune" },
  { code: "r11", name: "Amn Rune", displayName: "Amn Rune", rarity: "Rune", databaseIndex: "Rune/Amn Rune" },
  { code: "r12", name: "Sol Rune", displayName: "Sol Rune", rarity: "Rune", databaseIndex: "Rune/Sol Rune" },
  { code: "r13", name: "Shael Rune", displayName: "Shael Rune", rarity: "Rune", databaseIndex: "Rune/Shael Rune" },
  { code: "r14", name: "Dol Rune", displayName: "Dol Rune", rarity: "Rune", databaseIndex: "Rune/Dol Rune" },
  { code: "r15", name: "Hel Rune", displayName: "Hel Rune", rarity: "Rune", databaseIndex: "Rune/Hel Rune" },
  { code: "r16", name: "Io Rune", displayName: "Io Rune", rarity: "Rune", databaseIndex: "Rune/Io Rune" },
  { code: "r17", name: "Lum Rune", displayName: "Lum Rune", rarity: "Rune", databaseIndex: "Rune/Lum Rune" },
  { code: "r18", name: "Ko Rune", displayName: "Ko Rune", rarity: "Rune", databaseIndex: "Rune/Ko Rune" },
  { code: "r19", name: "Fal Rune", displayName: "Fal Rune", rarity: "Rune", databaseIndex: "Rune/Fal Rune" },
  { code: "r20", name: "Lem Rune", displayName: "Lem Rune", rarity: "Rune", databaseIndex: "Rune/Lem Rune" },
  { code: "r21", name: "Pul Rune", displayName: "Pul Rune", rarity: "Rune", databaseIndex: "Rune/Pul Rune" },
  { code: "r22", name: "Um Rune", displayName: "Um Rune", rarity: "Rune", databaseIndex: "Rune/Um Rune" },
  { code: "r23", name: "Mal Rune", displayName: "Mal Rune", rarity: "Rune", databaseIndex: "Rune/Mal Rune" },
  { code: "r24", name: "Ist Rune", displayName: "Ist Rune", rarity: "Rune", databaseIndex: "Rune/Ist Rune" },
  { code: "r25", name: "Gul Rune", displayName: "Gul Rune", rarity: "Rune", databaseIndex: "Rune/Gul Rune" },
  { code: "r26", name: "Vex Rune", displayName: "Vex Rune", rarity: "Rune", databaseIndex: "Rune/Vex Rune" },
  { code: "r27", name: "Ohm Rune", displayName: "Ohm Rune", rarity: "Rune", databaseIndex: "Rune/Ohm Rune" },
  { code: "r28", name: "Lo Rune", displayName: "Lo Rune", rarity: "Rune", databaseIndex: "Rune/Lo Rune" },
  { code: "r29", name: "Sur Rune", displayName: "Sur Rune", rarity: "Rune", databaseIndex: "Rune/Sur Rune" },
  { code: "r30", name: "Ber Rune", displayName: "Ber Rune", rarity: "Rune", databaseIndex: "Rune/Ber Rune" },
  { code: "r31", name: "Jah Rune", displayName: "Jah Rune", rarity: "Rune", databaseIndex: "Rune/Jah Rune" },
  { code: "r32", name: "Cham Rune", displayName: "Cham Rune", rarity: "Rune", databaseIndex: "Rune/Cham Rune" },
  { code: "r33", name: "Zod Rune", displayName: "Zod Rune", rarity: "Rune", databaseIndex: "Rune/Zod Rune" }
]

