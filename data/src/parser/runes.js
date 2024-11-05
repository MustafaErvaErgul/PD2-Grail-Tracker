import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo, logWarning } from "../utils/commonUtils.js"
import { RUNES } from "../arbitrary/index.js"

/*
  Runes Item Fields
  'Name' -> Runeword code, reference used in 'String Tables'
  'Rune Name' -> ID, Runeword name
  'complete' -> Whether runeword is obtainable or not 1|0
*/

const runewordsTxtFileData = fs.readFileSync("assets/Runes.txt", "latin1")

export const parseRunewords = (database) => {
  const runewordsData = convertTxtToArray(runewordsTxtFileData)

  runewordsData.forEach((runeword, index) => {
    if (!runeword.complete) {
      return
    }

    const _id = runeword['Rune Name']
    const _name = runeword['Name']
    const _displayName = findStringTableValue(_name)
    const _runesArray = []

    for (let i = 1; i <= 6; i++) {
      const fieldName = `Rune${i}`

      if (runeword[fieldName]) {
        const rune = RUNES.find((element) => {
          return element.id == runeword[fieldName]
        })

        if (!rune) {
          logError(`Failed to find Rune ${runeword[fieldName]}`)
          continue
        }

        _runesArray.push(rune.name.replace(" Rune", ""))
      }
    }

    const _runes = _runesArray.join("");
    const _rarity = "runeword"
    const _databaseIndex = `${_rarity}/${_id}`

    const runewordGrailEntry = {
      id: _id,
      name: _name,
      displayName: _displayName,
      rarity: _rarity,
      runes: _runes,
      databaseIndex: _databaseIndex,
      found: false
    }

    const runewordDatabaseIndexEntry = {
      id: _id,
      name: _name,
      displayName: _displayName,
      rarity: _rarity,
      runes: _runes,
      databaseIndex: _databaseIndex
    }

    database['grailData'] ??= {}
    database['grailData'][_rarity] ??= {}

    database['grailData'][_rarity][_id] = runewordGrailEntry

    indexRuneword(database, runewordDatabaseIndexEntry)
  })
}

const indexRuneword = (database, item) => {
  // First insertion into the object indexes
  database['grailData']['databaseIndexes']['runeword'][item.id] = item

  const existingArrayEntry = database['grailData']['databaseIndexesArray'].find((entry) => {
    return entry.databaseIndex == item.databaseIndex
  })

  if (!existingArrayEntry) {
    // Second insertion into the array indexes
    database['grailData']['databaseIndexesArray'].push(item)
    database['grailData']['totalRunewords'] += 1
  } else {
    logWarning(`${item.databaseIndex} already exists in databaseIndexesArray`)
  }
}