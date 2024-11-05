import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo } from "../utils/commonUtils.js"

/*
  Armor Fields
  'name' -> Base name
  'code' -> ID, This value is referenced in other .txt files to point to the base
  'namestr' -> Reference used in 'String Tables'
  'normcode' -> Code of the normal version of item
  'ubercode' -> Code of the exceptional version of item
  'ultracode' -> Code of the elite version of item
  'levelreq' -> Level requirement
  If 'code' == 'normcode' item is 'normal', if 'code' == 'ubercode' item is 'exceptional'
*/

const armorTxtFileData = fs.readFileSync("assets/Armor.txt", "latin1")

export const parseArmorBases = (database) => {
  const armorData = convertTxtToArray(armorTxtFileData)

  const armorBases = []

  armorData.forEach((element, index) => {
    if (!element.namestr) {
      return
    }

    const armorBase = {
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

    armorBases.push(armorBase)
  })

  database['armorBases'] = armorBases
}
