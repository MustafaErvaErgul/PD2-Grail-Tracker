import "./UniqueArmor.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const armorCategories = [
  { title: "Helmet", subCategories: [{ databaseIndex: "Unique/Armor/Helmet/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Helmet/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Helmet/Elite", title: "Elite" }] },
  { title: "Chest", subCategories: [{ databaseIndex: "Unique/Armor/Chest/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Chest/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Chest/Elite", title: "Elite" }] },
  { title: "Gloves", subCategories: [{ databaseIndex: "Unique/Armor/Gloves/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Gloves/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Gloves/Elite", title: "Elite" }] },
  { title: "Boots", subCategories: [{ databaseIndex: "Unique/Armor/Boots/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Boots/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Boots/Elite", title: "Elite" }] },
  { title: "Belt", subCategories: [{ databaseIndex: "Unique/Armor/Belt/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Belt/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Belt/Elite", title: "Elite" }] },
  { title: "Circlet", subCategories: [{ databaseIndex: "Unique/Armor/Circlet/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Circlet/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Circlet/Elite", title: "Elite" }] },
  { title: "Shield", subCategories: [{ databaseIndex: "Unique/Armor/Shield/Normal", title: "Normal" }, { databaseIndex: "Unique/Armor/Shield/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Armor/Shield/Elite", title: "Elite" }] }
]

const UniqueArmor = () => {
  const database = useZustand(state => state.database)

  return (
    <div id="page-content">
      {armorCategories.map((armorCategory, armorCategoryIndex) => {
        return (
          <div key={armorCategoryIndex} className="unique-armor-container">
            <div className="unique-armor-category-title">{armorCategory.title}</div>

            <div className="unique-armor-lists-container">
              {armorCategory.subCategories.map((subCategory, index) => {
                return (
                  <UniqueItemList
                    key={subCategory.databaseIndex}
                    title={subCategory.title}
                    items={convertObjectToArray(getObjectFromDatabaseIndex(database, subCategory.databaseIndex))}
                  />
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )

}

export default UniqueArmor