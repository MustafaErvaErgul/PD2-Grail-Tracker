export const getObjectFromDatabaseIndex = (database, databaseIndex) => {
  if (!database || !databaseIndex) return null;

  const indexArray = databaseIndex.split("/")
  let currentLevel = database

  for (const key of indexArray) {
    if (currentLevel[key] === undefined) {
      return null
    }
    currentLevel = currentLevel[key]
  }

  return currentLevel
}

export const convertObjectToArray = (obj) => {
  return obj ? Object.values(obj) : [];
}