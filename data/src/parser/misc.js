import { RUNES } from "../arbitrary/index.js"

export const populateOtherBases = (database) => {
  database['otherBases'] = [
    { id: "rin", name: "Ring", displayName: "Ring", namestr: "rin", type: "rin" },
    { id: "amu", name: "Amulet", displayName: "Amulet", namestr: "amu", type: "amu" },
    { id: "jew", name: "Jewel", displayName: "Jewel", namestr: "jew", type: "jew" },
    { id: "cm3", name: "Grand Charm", displayName: "Grand Charm", namestr: "cm3", type: "cm3" },
    { id: "cm2", name: "Large Charm", displayName: "Large Charm", namestr: "cm2", type: "cm2" },
    { id: "cm1", name: "Small Charm", displayName: "Small Charm", namestr: "cm1", type: "cm1" }
  ]
}

export const populatePD2Bases = (database) => {
  database['pd2Bases'] = [
    { id: "ram", name: "The Third Eye", displayName: "The Third Eye", namestr: "ram", type: "ram" },
    { id: "t51", name: "Zhar the Mad Map", displayName: "Zhar the Mad Map", namestr: "t51", type: "t51", },
    { id: "t52", name: "Warlord of Blood Map", displayName: "Warlord of Blood Map", namestr: "t52", type: "t52" },
    { id: "t53", name: "Fallen Gardens Map", displayName: "Fallen Gardens Map", namestr: "t53", type: "t53", }
  ]
}

export const populateRunes = (database) => {
  RUNES.forEach((rune) => {
    database['grailData']['rune'][rune.name] = rune
    database['grailData']['databaseIndexes']['rune'][rune.name] = rune
    database['grailData']['databaseIndexesArray'].push(rune)

    database['grailData']['totalRunes'] += 1
  })
}