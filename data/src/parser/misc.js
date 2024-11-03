import { RUNES } from "../arbitrary/index.js"

export const populateOtherBases = (database) => {
  database['otherBases'] = [
    { name: "Ring", displayName: "Ring", type: "rin", code: "rin", namestr: "rin" },
    { name: "Amulet", displayName: "Amulet", type: "amu", code: "amu", namestr: "amu" },
    { name: "Jewel", displayName: "Jewel", type: "jew", code: "jew", namestr: "jew" },
    { name: "Grand Charm", displayName: "Grand Charm", type: "cm3", code: "cm3", namestr: "cm3" },
    { name: "Large Charm", displayName: "Large Charm", type: "cm2", code: "cm2", namestr: "cm2" },
    { name: "Small Charm", displayName: "Small Charm", type: "cm1", code: "cm1", namestr: "cm1" }
  ]
}

export const populatePD2Bases = (database) => {
  database['pd2Bases'] = [
    { name: "The Third Eye", displayName: "The Third Eye", type: "ram", code: "ram", namestr: "ram" },
    { name: "Zhar the Mad Map", displayName: "Zhar the Mad Map", type: "t51", code: "t51", namestr: "t51" },
    { name: "Warlord of Blood Map", displayName: "Warlord of Blood Map", type: "t52", code: "t52", namestr: "t52" },
    { name: "Fallen Gardens Map", displayName: "Fallen Gardens Map", type: "t53", code: "t53", namestr: "t53" }
  ]
}

export const populateRunes = (database) => {
  RUNES.forEach((rune) => {
    database['grailData']['Rune'][rune.displayName] = rune
    database['grailData']['databaseIndexes'][rune.displayName] = rune
    database['grailData']['databaseIndexesArray'].push(rune)

    database['grailData']['totalRunes'] += 1
  })
}