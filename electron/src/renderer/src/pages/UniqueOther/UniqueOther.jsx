import "./UniqueOther.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const otherCategories = [
  { title: "Jewellery", subCategories: [{ databaseIndex: "unique/other/amulet", title: "Amulet" }, { databaseIndex: "unique/other/ring", title: "Ring" }] },
  { title: "Class Specific", subCategories: [{ databaseIndex: "unique/other/amazon", title: "Amazon" }, { databaseIndex: "unique/other/assassin", title: "Assassin" }, { databaseIndex: "unique/other/barbarian", title: "Barbarian" }, { databaseIndex: "unique/other/druid", title: "Druid" }, { databaseIndex: "unique/other/necromancer", title: "Necromancer" }, { databaseIndex: "unique/other/paladin", title: "Paladin" }, { databaseIndex: "unique/other/sorceress", title: "Sorceress" }] },
  { title: "Misc", subCategories: [{ databaseIndex: "unique/other/charm", title: "Charm" }, { databaseIndex: "unique/other/map", title: "Map" }, { databaseIndex: "unique/other/jewel", title: "Jewel" }] }
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