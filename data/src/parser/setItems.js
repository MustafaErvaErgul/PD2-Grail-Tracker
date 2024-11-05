import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo, logWarning } from "../utils/commonUtils.js"

/*
  Set Item Fields
  'index' -> ID, Item name, reference used in 'String Tables'
  'set' -> Set name
  'item' -> Column that points to the base of the Set item
  'lvl req' -> Level requirement
*/

const setItemsTxtFileData = fs.readFileSync("assets/SetItems.txt", "latin1")

export const parseSetItems = (database) => {
  const setItemsData = convertTxtToArray(setItemsTxtFileData)

  setItemsData.forEach((setItem) => {
    const skipIteration = shouldSkipSetItem(setItem)

    if (skipIteration) {
      return
    }

    const _id = setItem.index
    const _displayName = findStringTableValue(_id)
    const _setName = setItem.set
    const _setNameDisplayName = findStringTableValue(_setName)
    const _rarity = "set"
    const _levelRequirement = setItem['lvl req']

    const _databaseIndex = `${_rarity}/${_setName}/${_id}`

    const setItemGrailEntry = {
      id: _id,
      displayName: _displayName,
      setName: _setName,
      setNameDisplayName: _setNameDisplayName,
      rarity: _rarity,
      levelRequirement: _levelRequirement,
      databaseIndex: _databaseIndex,
      found: false
    }

    const setItemDatabaseIndexEntry = {
      id: _id,
      displayName: _displayName,
      setName: _setName,
      setNameDisplayName: _setNameDisplayName,
      rarity: _rarity,
      databaseIndex: _databaseIndex
    }

    database['grailData'] ??= {}
    database['grailData'][_rarity] ??= {}
    database['grailData'][_rarity][_setName] ??= {}

    database['grailData'][_rarity][_setName][_id] = setItemGrailEntry

    indexSetItem(database, setItemDatabaseIndexEntry)
  })
}

const shouldSkipSetItem = (setItem) => {
  if (!setItem.set) {
    return true
  }
}

const indexSetItem = (database, item) => {
  // First insertion into the object indexes
  database['grailData']['databaseIndexes']['set'][item.id] = item

  const existingArrayEntry = database['grailData']['databaseIndexesArray'].find((entry) => {
    return entry.databaseIndex == item.databaseIndex
  })

  if (!existingArrayEntry) {
    // Second insertion into the array indexes
    database['grailData']['databaseIndexesArray'].push(item)
    database['grailData']['totalSetItems'] += 1
  } else {
    logWarning(`${item.databaseIndex} already exists in databaseIndexesArray`)
  }
}

