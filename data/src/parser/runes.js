import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo, logWarning } from "../utils/commonUtils.js"
import { RUNES } from "../arbitrary/index.js"

/*
  Runes Item Fields
  'Name' -> Runeword code, reference used in 'String Tables'
  'Rune Name' -> Runeword name
  'complete' -> Whether runeword is obtainable or not 1|0
*/

const runewordsTxtFileData = fs.readFileSync("assets/Runes.txt", "latin1")

export const parseRunewords = (database) => {
  const runewordsData = convertTxtToArray(runewordsTxtFileData)

  runewordsData.forEach((runeword, index) => {
    if (!runeword.complete) {
      return
    }

    const runewordCode = runeword['Name']
    const runewordName = runeword['Rune Name']
    const runewordDisplayName = findStringTableValue(runewordCode)
    const runewordRunesArray = []

    for (let i = 1; i <= 6; i++) {
      const fieldName = `Rune${i}`

      if (runeword[fieldName]) {
        const rune = RUNES.find((element) => {
          return element.code == runeword[fieldName]
        })

        if (!rune) {
          logError(`Failed to find Rune ${runeword[fieldName]}`)
          continue
        }

        runewordRunesArray.push(rune.name.replace(" Rune", ""))
      }
    }

    const runewordRunes = runewordRunesArray.join("");
    const runewordRarity = "Runeword"
    const runewordDatabaseIndex = `${runewordRarity}/${runewordName}`

    const runewordGrailEntry = {
      name: runewordName,
      displayName: runewordDisplayName,
      databaseIndex: runewordDatabaseIndex,
      runes: runewordRunes,
      rarity: runewordRarity,
      found: false
    }

    const runewordDatabaseIndexEntry = {
      name: runewordName,
      displayName: runewordDisplayName,
      runes: runewordRunes,
      rarity: runewordRarity,
      databaseIndex: runewordDatabaseIndex
    }

    database['grailData'] ??= {}
    database['grailData'][runewordRarity] ??= {}

    database['grailData'][runewordRarity][runewordName] = runewordGrailEntry
    database['grailData']['databaseIndexes'][runewordName] = runewordDatabaseIndexEntry

    const existingDatabaseIndexArrayEntry = database['grailData']['databaseIndexesArray'].find((databaseIndexArrayEntry) => {
      return databaseIndexArrayEntry.databaseIndex == runewordDatabaseIndex
    })

    if (!existingDatabaseIndexArrayEntry) {
      database['grailData']['databaseIndexesArray'].push(runewordDatabaseIndexEntry)
      database['grailData']['totalRunewords'] += 1
    } else {
      logWarning(`${runewordDatabaseIndex} already exists in databaseIndexesArray`)
    }

  })
}