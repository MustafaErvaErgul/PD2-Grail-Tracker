import fs from "fs"
import { convertTxtToArray, determineItemTier, findStringTableValue, logError, logInfo } from "../utils/commonUtils.js"

/*
  Armor Fields
  'name' -> Base name
  'levelreq' -> Level requirement
  'code' -> Column that is referenced in other .txt files that point to the base
  'namestr' -> Column that is referenced in other .txt files that point to the base
  'normcode' -> Code of the normal version of item
  'ubercode' -> Code of the exceptional version of item
  'ultracode' -> Code of the elite version of item
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

    armorBases.push(armorBase)
  })

  database['armorBases'] = armorBases
}
