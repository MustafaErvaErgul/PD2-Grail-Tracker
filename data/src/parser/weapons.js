import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo } from "../utils/commonUtils.js"

/*
  Weapon Fields
  'name' -> Base name
  'levelreq' -> Level requirement
  'code' -> Column that is referenced in other .txt files that point to the base
  'namestr' -> Column that is referenced in other .txt files that point to the base
  'type2' -> This column has a value if the item is Two-Handed,
  'normcode' -> Code of the normal version of item
  'ubercode' -> Code of the exceptional version of item
  'ultracode' -> Code of the elite version of item
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
      name: element.name,
      displayName: findStringTableValue(element.namestr),
      levelRequirement: element.levelreq,
      code: element.code,
      namestr: element.namestr,
      normcode: element.normcode,
      ubercode: element.ubercode,
      ultracode: element.ultracode,
      tier: determineItemTier(element),
      type: element.type,
      type2: element.type2
    }

    weaponBases.push(weaponBase)
  })

  database['weaponBases'] = weaponBases
}