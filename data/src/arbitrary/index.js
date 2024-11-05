export const ARMOR_BASE_TYPES = [
  { category: "armor", subCategory: "helmet", type: "helm", type2: "" },
  { category: "armor", subCategory: "chest", type: "tors", type2: "" },
  { category: "armor", subCategory: "gloves", type: "glov", type2: "" },
  { category: "armor", subCategory: "boots", type: "boot", type2: "" },
  { category: "armor", subCategory: "belt", type: "belt", type2: "" },
  { category: "armor", subCategory: "belt", type: "bels", type2: "" },
  { category: "armor", subCategory: "circlet", type: "circ", type2: "" },
  { category: "armor", subCategory: "shield", type: "shie", type2: "" }
]

export const WEAPON_BASE_TYPES = [
  { category: "weapon", subCategory: "axe(1-H)", type: "axe", type2: "" },
  { category: "weapon", subCategory: "axe(2-H)", type: "axe", type2: "2han" },
  { category: "weapon", subCategory: "bow", type: "bow", type2: "" },
  { category: "weapon", subCategory: "crossbow", type: "xbow", type2: "" },
  { category: "weapon", subCategory: "clubs(1-H)", type: "club", type2: "" },
  { category: "weapon", subCategory: "clubs(1-H)", type: "mace", type2: "" },
  { category: "weapon", subCategory: "clubs(1-H)", type: "hamm", type2: "" },
  { category: "weapon", subCategory: "clubs(2-H)", type: "club", type2: "2han" },
  { category: "weapon", subCategory: "clubs(2-H)", type: "hamm", type2: "2han" },
  { category: "weapon", subCategory: "dagger", type: "knif", type2: "" },
  { category: "weapon", subCategory: "polearm", type: "pole", type2: "2han" },
  { category: "weapon", subCategory: "polearm", type: "sc9", type2: "2han" },
  { category: "weapon", subCategory: "scepter", type: "scep", type2: "" },
  { category: "weapon", subCategory: "spear", type: "spea", type2: "2han" },
  { category: "weapon", subCategory: "staves", type: "staf", type2: "2han" },
  { category: "weapon", subCategory: "sword(1-H)", type: "swor", type2: "" },
  { category: "weapon", subCategory: "sword(1-H)", type: "swor", type2: "crys" },
  { category: "weapon", subCategory: "sword(2-H)", type: "swor", type2: "2hsw" },
  { category: "weapon", subCategory: "throwing", type: "tkni", type2: "" },
  { category: "weapon", subCategory: "throwing", type: "taxe", type2: "" },
  { category: "weapon", subCategory: "throwing", type: "jave", type2: "" },
  { category: "weapon", subCategory: "throwingPotion", type: "tpot", type2: "" },
  { category: "weapon", subCategory: "wand", type: "wand", type2: "" }
]

export const OTHER_BASE_TYPES = [
  { category: "other", subCategory: "amulet", type: "amu", type2: "" },
  { category: "other", subCategory: "ring", type: "rin", type2: "" },
  { category: "other", subCategory: "amazon", type: "abow", type2: "" },
  { category: "other", subCategory: "amazon", type: "aspe", type2: "2han" },
  { category: "other", subCategory: "amazon", type: "ajav", type2: "" },
  { category: "other", subCategory: "assassin", type: "h2h", type2: "" },
  { category: "other", subCategory: "assassin", type: "h2h2", type2: "" },
  { category: "other", subCategory: "barbarian", type: "phlm", type2: "" },
  { category: "other", subCategory: "druid", type: "pelt", type2: "" },
  { category: "other", subCategory: "necromancer", type: "head", type2: "" },
  { category: "other", subCategory: "paladin", type: "ashd", type2: "" },
  { category: "other", subCategory: "sorceress", type: "orb", type2: "" },
  { category: "other", subCategory: "charm", type: "cm3", type2: "" },
  { category: "other", subCategory: "charm", type: "cm2", type2: "" },
  { category: "other", subCategory: "charm", type: "cm1", type2: "" },
  { category: "other", subCategory: "jewel", type: "jew", type2: "" }
]

export const PD2_BASE_TYPES = [
  { category: "other", subCategory: "map", type: "t51", type2: "" },
  { category: "other", subCategory: "map", type: "t52", type2: "" },
  { category: "other", subCategory: "map", type: "t53", type2: "" },
  { category: "other", subCategory: "amulet", type: "ram", type2: "" }
]

export const ITEM_BASE_TYPES = [...ARMOR_BASE_TYPES, ...WEAPON_BASE_TYPES, ...OTHER_BASE_TYPES, ...PD2_BASE_TYPES]

export const RUNES = [
  { id: "r01", rarity: "rune", name: "El Rune", displayName: "El Rune", databaseIndex: "rune/El Rune" },
  { id: "r02", rarity: "rune", name: "Eld Rune", displayName: "Eld Rune", databaseIndex: "rune/Eld Rune" },
  { id: "r03", rarity: "rune", name: "Tir Rune", displayName: "Tir Rune", databaseIndex: "rune/Tir Rune" },
  { id: "r04", rarity: "rune", name: "Nef Rune", displayName: "Nef Rune", databaseIndex: "rune/Nef Rune" },
  { id: "r05", rarity: "rune", name: "Eth Rune", displayName: "Eth Rune", databaseIndex: "rune/Eth Rune" },
  { id: "r06", rarity: "rune", name: "Ith Rune", displayName: "Ith Rune", databaseIndex: "rune/Ith Rune" },
  { id: "r07", rarity: "rune", name: "Tal Rune", displayName: "Tal Rune", databaseIndex: "rune/Tal Rune" },
  { id: "r08", rarity: "rune", name: "Ral Rune", displayName: "Ral Rune", databaseIndex: "rune/Ral Rune" },
  { id: "r09", rarity: "rune", name: "Ort Rune", displayName: "Ort Rune", databaseIndex: "rune/Ort Rune" },
  { id: "r10", rarity: "rune", name: "Thul Rune", displayName: "Thul Rune", databaseIndex: "rune/Thul Rune" },
  { id: "r11", rarity: "rune", name: "Amn Rune", displayName: "Amn Rune", databaseIndex: "rune/Amn Rune" },
  { id: "r12", rarity: "rune", name: "Sol Rune", displayName: "Sol Rune", databaseIndex: "rune/Sol Rune" },
  { id: "r13", rarity: "rune", name: "Shael Rune", displayName: "Shael Rune", databaseIndex: "rune/Shael Rune" },
  { id: "r14", rarity: "rune", name: "Dol Rune", displayName: "Dol Rune", databaseIndex: "rune/Dol Rune" },
  { id: "r15", rarity: "rune", name: "Hel Rune", displayName: "Hel Rune", databaseIndex: "rune/Hel Rune" },
  { id: "r16", rarity: "rune", name: "Io Rune", displayName: "Io Rune", databaseIndex: "rune/Io Rune" },
  { id: "r17", rarity: "rune", name: "Lum Rune", displayName: "Lum Rune", databaseIndex: "rune/Lum Rune" },
  { id: "r18", rarity: "rune", name: "Ko Rune", displayName: "Ko Rune", databaseIndex: "rune/Ko Rune" },
  { id: "r19", rarity: "rune", name: "Fal Rune", displayName: "Fal Rune", databaseIndex: "rune/Fal Rune" },
  { id: "r20", rarity: "rune", name: "Lem Rune", displayName: "Lem Rune", databaseIndex: "rune/Lem Rune" },
  { id: "r21", rarity: "rune", name: "Pul Rune", displayName: "Pul Rune", databaseIndex: "rune/Pul Rune" },
  { id: "r22", rarity: "rune", name: "Um Rune", displayName: "Um Rune", databaseIndex: "rune/Um Rune" },
  { id: "r23", rarity: "rune", name: "Mal Rune", displayName: "Mal Rune", databaseIndex: "rune/Mal Rune" },
  { id: "r24", rarity: "rune", name: "Ist Rune", displayName: "Ist Rune", databaseIndex: "rune/Ist Rune" },
  { id: "r25", rarity: "rune", name: "Gul Rune", displayName: "Gul Rune", databaseIndex: "rune/Gul Rune" },
  { id: "r26", rarity: "rune", name: "Vex Rune", displayName: "Vex Rune", databaseIndex: "rune/Vex Rune" },
  { id: "r27", rarity: "rune", name: "Ohm Rune", displayName: "Ohm Rune", databaseIndex: "rune/Ohm Rune" },
  { id: "r28", rarity: "rune", name: "Lo Rune", displayName: "Lo Rune", databaseIndex: "rune/Lo Rune" },
  { id: "r29", rarity: "rune", name: "Sur Rune", displayName: "Sur Rune", databaseIndex: "rune/Sur Rune" },
  { id: "r30", rarity: "rune", name: "Ber Rune", displayName: "Ber Rune", databaseIndex: "rune/Ber Rune" },
  { id: "r31", rarity: "rune", name: "Jah Rune", displayName: "Jah Rune", databaseIndex: "rune/Jah Rune" },
  { id: "r32", rarity: "rune", name: "Cham Rune", displayName: "Cham Rune", databaseIndex: "rune/Cham Rune" },
  { id: "r33", rarity: "rune", name: "Zod Rune", displayName: "Zod Rune", databaseIndex: "rune/Zod Rune" }
]