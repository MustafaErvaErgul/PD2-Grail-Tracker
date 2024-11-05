import fs from "fs"
import { convertTxtToArray, findStringTableValue, logInfo, logWarning, logError } from "../utils/commonUtils.js"
import { ITEM_BASE_TYPES } from "../arbitrary/index.js"

/*
  Unique Item Fields
  'index' -> ID, Item name, Reference used in 'String Tables'
  'code' -> Column that points to the base of the Unique item
  'lvl req' -> Level requirement
*/

const uniqueItemsFileData = fs.readFileSync("assets/UniqueItems.txt", "latin1")

export const parseUniqueItems = (database) => {
  const uniqueItemsData = convertTxtToArray(uniqueItemsFileData)

  uniqueItemsData.forEach((uniqueItem, index) => {
    const skipIteration = shouldSkipUniqueItem(uniqueItem)

    if (skipIteration) {
      return
    }

    const uniqueItemBase = findItemBase(database, uniqueItem)
    const uniqueItemBaseType = findItemBaseType(uniqueItemBase, uniqueItem)

    const _id = uniqueItem.index
    const _displayName = findStringTableValue(_id)
    const _base = uniqueItem.code
    const _rarity = "unique"
    const _category = uniqueItemBaseType.category
    const _subCategory = uniqueItemBaseType.subCategory
    const _tier = uniqueItemBase.tier
    const _levelRequirement = uniqueItem['lvl req']

    let _databaseIndex = null

    if (_tier && _category !== "other") {
      _databaseIndex = `${_rarity}/${_category}/${_subCategory}/${_tier}/${_id}`
    } else {
      _databaseIndex = `${_rarity}/${_category}/${_subCategory}/${_id}`
    }

    const uniqueItemGrailEntry = {
      id: _id,
      displayName: _displayName,
      base: _base,
      levelRequirement: _levelRequirement,
      rarity: _rarity,
      category: _category,
      subCategory: _subCategory,
      tier: _tier,
      databaseIndex: _databaseIndex,
      found: false
    }

    const uniqueItemDatabaseIndexEntry = {
      id: _id,
      displayName: _displayName,
      category: _category,
      subCategory: _subCategory,
      rarity: _rarity,
      databaseIndex: _databaseIndex
    }

    // Since we are inserting these entries in a nested structure, these fields may not be predefined.
    // The purpose here is to initialize these fields if they don't exist.
    database['grailData'] ??= {}
    database['grailData'][_rarity] ??= {}
    database['grailData'][_rarity][_category] ??= {};
    database['grailData'][_rarity][_category][_subCategory] ??= {}

    // For non-weapon/armor Uniques, we don't care about item tier.
    if (_tier && _category !== "other") {
      database['grailData'][_rarity][_category][_subCategory][_tier] ??= {}
      database['grailData'][_rarity][_category][_subCategory][_tier][_id] = uniqueItemGrailEntry
    } else {
      database['grailData'][_rarity][_category][_subCategory][_id] = uniqueItemGrailEntry
    }

    indexUniqueItem(database, uniqueItemDatabaseIndexEntry)
  })
}

const shouldSkipUniqueItem = (uniqueItem) => {
  if (!uniqueItem.code ||
    uniqueItem.enabled == "0" ||
    uniqueItem.code == "vip" || // Amulet of the Viper, Quest Item
    uniqueItem.index == "Staff of Kings" || // Quest Item
    uniqueItem.index == "Horadric Staff" || // Quest Item
    uniqueItem.index == "Hell Forge Hammer" || // Quest Item
    uniqueItem.index == "KhalimFlail" || // Quest Item
    uniqueItem.index == "SuperKhalimFlail" // Quest Item
  ) {
    return true
  }
}

const findItemBase = (database, uniqueItem) => {
  const bases = [...database.armorBases, ...database.weaponBases, ...database.otherBases, ...database.pd2Bases]

  const itemBase = bases.find((base) => {
    return base.id === uniqueItem.code
  })

  if (!itemBase) {
    logError(`findItemBase failed for ${uniqueItem.index}`)
    return
  }

  return itemBase
}

const findItemBaseType = (itemBase, uniqueItem) => {
  const itemBaseType = ITEM_BASE_TYPES.find((element) => {
    if (itemBase.type2) {
      return element.type == itemBase.type && element.type2 == itemBase.type2
    } else {
      return element.type == itemBase.type
    }
  })

  if (!itemBaseType) {
    logError(`findItemType failed for ${itemBase.name} - ${uniqueItem.index}`)
    return
  }

  return itemBaseType
}

const indexUniqueItem = (database, item) => {
  // First insertion into the object indexes
  database['grailData']['databaseIndexes']['unique'][item.id] = item

  const existingArrayEntry = database['grailData']['databaseIndexesArray'].find((entry) => {
    return entry.databaseIndex == item.databaseIndex
  })

  if (!existingArrayEntry) {
    // Second insertion into the array indexes
    database['grailData']['databaseIndexesArray'].push(item)
    database['grailData']['totalUniqueItems'] += 1
  } else {
    logWarning(`${item.databaseIndex} already exists in databaseIndexesArray`)
  }
}