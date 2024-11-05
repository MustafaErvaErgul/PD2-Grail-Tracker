import "./UniqueArmor.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const armorCategories = [
  { title: "Helmet", subCategories: [{ databaseIndex: "unique/armor/helmet/normal", title: "Normal" }, { databaseIndex: "unique/armor/helmet/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/helmet/elite", title: "Elite" }] },
  { title: "Chest", subCategories: [{ databaseIndex: "unique/armor/chest/normal", title: "Normal" }, { databaseIndex: "unique/armor/chest/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/chest/elite", title: "Elite" }] },
  { title: "Gloves", subCategories: [{ databaseIndex: "unique/armor/gloves/normal", title: "Normal" }, { databaseIndex: "unique/armor/gloves/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/gloves/elite", title: "Elite" }] },
  { title: "Boots", subCategories: [{ databaseIndex: "unique/armor/boots/normal", title: "Normal" }, { databaseIndex: "unique/armor/boots/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/boots/elite", title: "Elite" }] },
  { title: "Belt", subCategories: [{ databaseIndex: "unique/armor/belt/normal", title: "Normal" }, { databaseIndex: "unique/armor/belt/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/belt/elite", title: "Elite" }] },
  { title: "Circlet", subCategories: [{ databaseIndex: "unique/armor/circlet/normal", title: "Normal" }, { databaseIndex: "unique/armor/circlet/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/circlet/elite", title: "Elite" }] },
  { title: "Shield", subCategories: [{ databaseIndex: "unique/armor/shield/normal", title: "Normal" }, { databaseIndex: "unique/armor/shield/exceptional", title: "Exceptional" }, { databaseIndex: "unique/armor/shield/elite", title: "Elite" }] }
];


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