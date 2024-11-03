import "./UniqueWeapons.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const weaponCategories = [
  { title: "Axe(1-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Axe(1-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Axe(1-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Axe(1-H)/Elite", title: "Elite" }] },
  { title: "Axe(2-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Axe(2-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Axe(2-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Axe(2-H)/Elite", title: "Elite" }] },
  { title: "Bow", subCategories: [{ databaseIndex: "Unique/Weapon/Bow/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Bow/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Bow/Elite", title: "Elite" }] },
  { title: "Crossbow", subCategories: [{ databaseIndex: "Unique/Weapon/Crossbow/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Crossbow/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Crossbow/Elite", title: "Elite" }] },
  { title: "Clubs(1-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Clubs(1-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Clubs(1-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Clubs(1-H)/Elite", title: "Elite" }] },
  { title: "Clubs(2-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Clubs(2-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Clubs(2-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Clubs(2-H)/Elite", title: "Elite" }] },
  { title: "Dagger", subCategories: [{ databaseIndex: "Unique/Weapon/Dagger/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Dagger/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Dagger/Elite", title: "Elite" }] },
  { title: "Polearm", subCategories: [{ databaseIndex: "Unique/Weapon/Polearm/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Polearm/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Polearm/Elite", title: "Elite" }] },
  { title: "Scepter", subCategories: [{ databaseIndex: "Unique/Weapon/Scepter/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Scepter/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Scepter/Elite", title: "Elite" }] },
  { title: "Spear", subCategories: [{ databaseIndex: "Unique/Weapon/Spear/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Spear/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Spear/Elite", title: "Elite" }] },
  { title: "Staves", subCategories: [{ databaseIndex: "Unique/Weapon/Staves/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Staves/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Staves/Elite", title: "Elite" }] },
  { title: "Sword(1-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Sword(1-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Sword(1-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Sword(1-H)/Elite", title: "Elite" }] },
  { title: "Sword(2-H)", subCategories: [{ databaseIndex: "Unique/Weapon/Sword(2-H)/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Sword(2-H)/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Sword(2-H)/Elite", title: "Elite" }] },
  { title: "Throwing", subCategories: [{ databaseIndex: "Unique/Weapon/Throwing/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Throwing/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Throwing/Elite", title: "Elite" }] },
  { title: "Wand", subCategories: [{ databaseIndex: "Unique/Weapon/Wand/Normal", title: "Normal" }, { databaseIndex: "Unique/Weapon/Wand/Exceptional", title: "Exceptional" }, { databaseIndex: "Unique/Weapon/Wand/Elite", title: "Elite" }] }
]

const UniqueWeapon = () => {
  const database = useZustand(state => state.database)

  return (
    <div id="page-content">
      {weaponCategories.map((weaponCategory, weaponCategoryIndex) => {
        return (
          <div key={weaponCategoryIndex} className="unique-weapon-container">
            <div className="unique-weapon-category-title">{weaponCategory.title}</div>

            <div className="unique-weapon-lists-container">
              {weaponCategory.subCategories.map((subCategory, index) => {
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

export default UniqueWeapon