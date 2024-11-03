import fs from "fs"
import { convertTxtToArray, findStringTableValue, logInfo, logWarning, logError } from "../utils/commonUtils.js"
import { ITEM_TYPES } from "../arbitrary/index.js"

/*
  Unique Item Fields
  'index' -> Item name, reference used in 'String Tables'
  'lvl req' -> Level requirement
  'code' -> Column that is referenced in other .txt files that point to the base
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
    const uniqueItemType = findItemType(uniqueItemBase, uniqueItem)

    const uniqueItemName = uniqueItem.index
    const uniqueItemDisplayName = findStringTableValue(uniqueItem.index)
    const uniqueItemLevelRequirement = uniqueItem['lvl req']
    const uniqueItemCode = uniqueItem.code
    const uniqueItemRarity = "Unique"
    const uniqueItemCategory = uniqueItemType.category
    const uniqueItemSubCategory = uniqueItemType.subCategory
    const uniqueItemTier = uniqueItemBase.tier

    let uniqueItemDatabaseIndex = null

    if (uniqueItemTier && uniqueItemType.category !== "Other") {
      uniqueItemDatabaseIndex = `${uniqueItemRarity}/${uniqueItemCategory}/${uniqueItemSubCategory}/${uniqueItemTier}/${uniqueItemName}`
    } else {
      uniqueItemDatabaseIndex = `${uniqueItemRarity}/${uniqueItemCategory}/${uniqueItemSubCategory}/${uniqueItemName}`
    }

    const uniqueItemGrailEntry = {
      name: uniqueItemName,
      displayName: uniqueItemDisplayName,
      levelRequirement: uniqueItemLevelRequirement,
      code: uniqueItemCode,
      rarity: uniqueItemRarity,
      category: uniqueItemCategory,
      subCategory: uniqueItemSubCategory,
      tier: uniqueItemTier,
      databaseIndex: uniqueItemDatabaseIndex,
      found: false
    }

    const uniqueItemDatabaseIndexEntry = {
      name: uniqueItemName,
      displayName: uniqueItemDisplayName,
      category: uniqueItemCategory,
      subCategory: uniqueItemSubCategory,
      rarity: uniqueItemRarity,
      databaseIndex: uniqueItemDatabaseIndex
    }

    // Since we are inserting these entries in a nested structure, these fields may not be predefined.
    // The purpose here is to initialize these fields if they don't exist.
    database['grailData'] ??= {}
    database['grailData'][uniqueItemRarity] ??= {}
    database['grailData'][uniqueItemRarity][uniqueItemCategory] ??= {};
    database['grailData'][uniqueItemRarity][uniqueItemCategory][uniqueItemSubCategory] ??= {}

    if (uniqueItemTier && uniqueItemType.category !== "Other") {
      database['grailData'][uniqueItemRarity][uniqueItemCategory][uniqueItemSubCategory][uniqueItemTier] ??= {}
      database['grailData'][uniqueItemRarity][uniqueItemCategory][uniqueItemSubCategory][uniqueItemTier][uniqueItemName] = uniqueItemGrailEntry
      database['grailData']['databaseIndexes'][uniqueItemName] = uniqueItemDatabaseIndexEntry

      const existingDatabaseIndexArrayEntry = database['grailData']['databaseIndexesArray'].find((databaseIndexArrayEntry) => {
        return databaseIndexArrayEntry.databaseIndex == uniqueItemDatabaseIndex
      })

      if (!existingDatabaseIndexArrayEntry) {
        database['grailData']['databaseIndexesArray'].push(uniqueItemDatabaseIndexEntry)
      } else {
        logWarning(`${uniqueItemDatabaseIndex} already exists in databaseIndexesArray`)
      }

      database['grailData']['totalUniqueItems'] += 1
    } else {
      database['grailData'][uniqueItemRarity][uniqueItemCategory][uniqueItemSubCategory][uniqueItemName] = uniqueItemGrailEntry
      database['grailData']['databaseIndexes'][uniqueItemName] = uniqueItemDatabaseIndexEntry

      const existingDatabaseIndexArrayEntry = database['grailData']['databaseIndexesArray'].find((databaseIndexArrayEntry) => {
        return databaseIndexArrayEntry.databaseIndex == uniqueItemDatabaseIndex
      })

      if (!existingDatabaseIndexArrayEntry) {
        database['grailData']['databaseIndexesArray'].push(uniqueItemDatabaseIndexEntry)
        database['grailData']['totalUniqueItems'] += 1
      } else {
        logWarning(`${uniqueItemDatabaseIndex} already exists in databaseIndexesArray`)
      }

    }
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
    return base.code === uniqueItem.code || base.namestr == uniqueItem.code
  })

  if (!itemBase) {
    logError(`findItemBase failed for ${uniqueItem.index}`)
  }

  return itemBase
}

const findItemType = (itemBase, uniqueItem) => {
  const itemType = ITEM_TYPES.find((itemType) => {
    if (itemBase.type2) {
      return itemType.type == itemBase.type && itemType.type2 == itemBase.type2
    } else {
      return itemType.type == itemBase.type
    }
  })

  if (!itemType) {
    logError(`findItemType failed for ${itemBase.name} - ${uniqueItem.index}`)
  }

  return itemType
}