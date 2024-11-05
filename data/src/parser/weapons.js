import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo } from "../utils/commonUtils.js"

/*
  Weapon Fields
  'name' -> Base name
  'code' -> ID, This value is referenced in other .txt files to point to the base
  'normcode' -> Code of the normal version of item
  'ubercode' -> Code of the exceptional version of item
  'ultracode' -> Code of the elite version of item
  'namestr' -> Reference used in 'String Tables'
  'type2' -> This column has a value if the item is Two-Handed or a Crystal Sword
  'levelreq' -> Level requirement
  If 'code' == 'normcode' item is 'normal', if 'code' == 'ubercode' item is 'exceptional'
*/

const weaponTxtFileData = fs.readFileSync("assets/Weapons.txt", "latin1")

export const parseWeaponBases = (database) => {
  const weaponData = convertTxtToArray(weaponTxtFileData)

  const weaponBases = []

  weaponData.forEach((element, index) => {
    // Skip empty rows or Throwing Potions
    if (!element.namestr || element.type === "tpot") {
      return
    }

    const weaponBase = {
      id: element.code,
      name: element.name,
      displayName: findStringTableValue(element.namestr),
      namestr: element.namestr,
      normcode: element.normcode,
      ubercode: element.ubercode,
      ultracode: element.ultracode,
      type: element.type,
      type2: element.type2,
      levelRequirement: element.levelreq,
      tier: determineItemTier(element)
    }

    weaponBases.push(weaponBase)
  })

  database['weaponBases'] = weaponBases
}