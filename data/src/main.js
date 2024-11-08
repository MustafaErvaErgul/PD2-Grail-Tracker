import fs from "fs"
import { parseArmorBases } from "./parser/armor.js"
import { parseWeaponBases } from "./parser/weapons.js"
import { populateOtherBases, populatePD2Bases, populateRunes } from "./parser/misc.js"
import { parseUniqueItems } from "./parser/uniqueItems.js"
import { parseSetItems } from "./parser/setItems.js"
import { parseRunewords } from "./parser/runes.js"

const database = {
  armorBases: [],
  weaponBases: [],
  otherBases: [],
  pd2Bases: [],
  grailData: {
    databaseIndexes: {
      unique: {},
      set: {},
      runeword: {},
      rune: {}
    },
    databaseIndexesArray: [],
    unique: {},
    totalUniqueItems: 0,
    totalUniqueItemsFound: 0,
    set: {},
    totalSetItems: 0,
    totalSetItemsFound: 0,
    runeword: {},
    includeRunewords: true,
    totalRunewords: 0,
    totalRunewordsFound: 0,
    rune: {},
    includeRunes: true,
    totalRunes: 0,
    totalRunesFound: 0
  }
}

parseArmorBases(database)
parseWeaponBases(database)
populateOtherBases(database)
populatePD2Bases(database)
populateRunes(database)
parseUniqueItems(database)
parseSetItems(database)
parseRunewords(database)

const grailData = database['grailData']

fs.writeFileSync("../database.txt", JSON.stringify(grailData, null, 2), "utf8");
