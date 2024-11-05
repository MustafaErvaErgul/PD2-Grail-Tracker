import { create } from "zustand"
import { getObjectFromDatabaseIndex } from "../utils"

const useZustand = create((set, get) => ({
  loadingState: false,
  setLoadingState: (_loadingState) => { set({ loadingState: _loadingState }) },

  database: null,
  setDatabase: (_database) => { set({ database: _database }) },

  missingItemsOnly: false,
  setMissingItemsOnly: (_boolean) => { set({ missingItemsOnly: _boolean }) },

  trackedItemsOnly: false,
  setTrackedItemsOnly: (_boolean) => { set({ trackedItemsOnly: _boolean }) },

  readDatabase: async () => {
    try {
      { set({ loadingState: true }) }

      const response = await window.api.readData()

      set({
        database: response,
        includeRunes: response.includeRunes,
        includeRunewords: response.includeRunewords
      })
    } catch (error) {
      console.error(error)
    } finally {
      { set({ loadingState: false }) }
    }
  },

  writeToDatabase: async () => {
    const database = get().database
    const showToast = get().showToast
    const readDatabase = get().readDatabase

    try {
      { set({ loadingState: true }) }

      await window.api.writeData(database)
    } catch (error) {
      console.error(error)
      showToast("error", "Error Writing to Database!", error.toString())
      readDatabase()
    } finally {
      { set({ loadingState: false }) }
    }
  },

  toggleItemFound: (item) => {
    const database = get().database
    const setDatabase = get().setDatabase
    const writeToDatabase = get().writeToDatabase

    let updatedDatabase = { ...database }
    let updatedItem = getObjectFromDatabaseIndex(updatedDatabase, item.databaseIndex)

    if (!updatedItem) {
      console.error(`Failed to find item ${item.databaseIndex}`)
      showToast("error", "Error!", `Failed to find item ${item.databaseIndex}`)
      return
    }

    const oldFoundValue = updatedItem.found
    const newFoundValue = !updatedItem.found
    updatedItem.found = newFoundValue

    if (newFoundValue) {
      switch (updatedItem.rarity) {
        case "unique":
          updatedDatabase.totalUniqueItemsFound += 1
          break
        case "set":
          updatedDatabase.totalSetItemsFound += 1
          break
        case "runeword":
          updatedDatabase.totalRunewordsFound += 1
          break
        case "rune":
          updatedDatabase.totalRunesFound += 1
          break
        default:
          break
      }
    } else {
      switch (updatedItem.rarity) {
        case "unique":
          updatedDatabase.totalUniqueItemsFound -= 1
          break
        case "set":
          updatedDatabase.totalSetItemsFound -= 1
          break
        case "runeword":
          updatedDatabase.totalRunewordsFound -= 1
          break
        case "rune":
          updatedDatabase.totalRunesFound -= 1
          break
        default:
          break
      }
    }

    setDatabase(updatedDatabase)
    writeToDatabase()
  },

  markItemAsFound: (itemRarity, itemId) => {
    const database = get().database
    const setDatabase = get().setDatabase
    const writeToDatabase = get().writeToDatabase
    const showToast = get().showToast

    let databaseIndexEntry = database['databaseIndexes'][itemRarity][itemId]

    // If it can't directly access the item using databaseIndexes, we search for it in the array
    if (!databaseIndexEntry) {
      databaseIndexEntry = database['databaseIndexesArray'].find((element) => {
        return element.name === itemId || element.displayName === itemId
      })
    }

    if (!databaseIndexEntry) {
      showToast("error", "Error!", `Failed to find databaseIndexEntry ${itemRarity} ${itemId}`)
      return
    }

    let updatedDatabase = { ...database }
    let updatedItem = getObjectFromDatabaseIndex(updatedDatabase, databaseIndexEntry.databaseIndex)

    if (!updatedItem) {
      showToast("error", "Error!", `Failed to find item ${databaseIndexEntry.databaseIndex}`)
      return
    }

    const oldFoundValue = updatedItem.found

    if (oldFoundValue) {
      showToast("info", "Information!", `${updatedItem.displayName} already tracked!`)
      return
    } else {
      const newFoundValue = !updatedItem.found
      updatedItem.found = newFoundValue

      if (newFoundValue) {
        switch (itemRarity) {
          case "unique":
            updatedDatabase.totalUniqueItemsFound += 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "set":
            updatedDatabase.totalSetItemsFound += 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "runeword":
            updatedDatabase.totalRunewordsFound += 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "rune":
            updatedDatabase.totalRunesFound += 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          default:
            break
        }
      } else {
        switch (itemRarity) {
          case "unique":
            updatedDatabase.totalUniqueItemsFound -= 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "set":
            updatedDatabase.totalSetItemsFound -= 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "runeword":
            updatedDatabase.totalRunewordsFound -= 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          case "rune":
            updatedDatabase.totalRunesFound -= 1
            showToast("success", "Success!", `${updatedItem.displayName} tracked successfully!`)
            break
          default:
            break
        }
      }

      setDatabase(updatedDatabase)
      writeToDatabase()
    }
  },

  showToast: (type, title, message) => {
    window.api.showNotification({ type: type, title: title, message: message })
  }

}))

export default useZustand