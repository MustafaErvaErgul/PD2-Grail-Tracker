import "./UniqueOther.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const otherCategories = [
  { title: "Jewellery", subCategories: [{ databaseIndex: "Unique/Other/Amulet", title: "Amulet" }, { databaseIndex: "Unique/Other/Ring", title: "Ring" }] },
  { title: "Class Specific", subCategories: [{ databaseIndex: "Unique/Other/Amazon", title: "Amazon" }, { databaseIndex: "Unique/Other/Assassin", title: "Assassin" }, { databaseIndex: "Unique/Other/Barbarian", title: "Barbarian" }, { databaseIndex: "Unique/Other/Druid", title: "Druid" }, { databaseIndex: "Unique/Other/Necromancer", title: "Necromancer" }, { databaseIndex: "Unique/Other/Paladin", title: "Paladin" }, { databaseIndex: "Unique/Other/Sorceress", title: "Sorceress" }] },
  { title: "Misc", subCategories: [{ databaseIndex: "Unique/Other/Charm", title: "Charm" }, { databaseIndex: "Unique/Other/Map", title: "Map" }, { databaseIndex: "Unique/Other/Jewel", title: "Jewel" }] }
]

const UniqueOther = () => {
  const database = useZustand(state => state.database)

  return (
    <div id="page-content">
      {otherCategories.map((otherCategory, otherCategoryIndex) => {
        return (
          <div key={otherCategoryIndex} className="unique-other-container">
            <div className="unique-other-category-title">{otherCategory.title}</div>

            <div className="unique-other-lists-container">
              {otherCategory.subCategories.map((subCategory, index) => {
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

export default UniqueOther