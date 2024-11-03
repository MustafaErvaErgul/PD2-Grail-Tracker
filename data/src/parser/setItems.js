import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo, logWarning } from "../utils/commonUtils.js"

/*
  Set Item Fields
  'index' -> Item name, reference used in 'String Tables'
  'set' -> Set name
  'lvl req' -> Level requirement
  'item' -> Column that is referenced in other .txt files that point to the base
*/

const setItemsTxtFileData = fs.readFileSync("assets/SetItems.txt", "latin1")

export const parseSetItems = (database) => {
  const setItemsData = convertTxtToArray(setItemsTxtFileData)

  setItemsData.forEach((setItem) => {
    const skipIteration = shouldSkipSetItem(setItem)

    if (skipIteration) {
      return
    }

    const setItemName = setItem.index
    const setItemDisplayName = findStringTableValue(setItemName)
    const setItemSetName = setItem.set
    const setItemLevelRequirement = setItem['lvl req']
    const setItemRarity = "Set"
    const setItemDatabaseIndex = `${setItemRarity}/${setItemSetName}/${setItemName}`

    const setItemGrailEntry = {
      name: setItemName,
      displayName: setItemDisplayName,
      setName: setItemSetName,
      levelRequirement: setItemLevelRequirement,
      rarity: setItemRarity,
      databaseIndex: setItemDatabaseIndex,
      found: false
    }

    const setItemDatabaseIndexEntry = {
      name: setItemName,
      displayName: setItemDisplayName,
      setName: setItemSetName,
      rarity: setItemRarity,
      databaseIndex: setItemDatabaseIndex
    }

    database['grailData'] ??= {}
    database['grailData'][setItemRarity] ??= {}
    database['grailData'][setItemRarity][setItemSetName] ??= {}

    database['grailData'][setItemRarity][setItemSetName][setItemName] = setItemGrailEntry
    database['grailData']['databaseIndexes'][setItemName] = setItemDatabaseIndexEntry

    const existingDatabaseIndexArrayEntry = database['grailData']['databaseIndexesArray'].find((databaseIndexArrayEntry) => {
      return databaseIndexArrayEntry.databaseIndex == setItemDatabaseIndex
    })

    if (!existingDatabaseIndexArrayEntry) {
      database['grailData']['databaseIndexesArray'].push(setItemDatabaseIndexEntry)
      database['grailData']['totalSetItems'] += 1
    } else {
      logWarning(`${setItemDatabaseIndex} already exists in databaseIndexesArray`)
    }

  })
}

const shouldSkipSetItem = (setItem) => {
  if (!setItem.set) {
    return true
  }
}

