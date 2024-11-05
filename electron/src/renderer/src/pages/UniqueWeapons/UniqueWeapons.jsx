import "./UniqueWeapons.css"
import useZustand from "../../hooks/useZustand"
import UniqueItemList from "../../components/UniqueItemList/UniqueItemList"
import { convertObjectToArray, getObjectFromDatabaseIndex } from "../../utils"

const weaponCategories = [
  { title: "Axe(1-H)", subCategories: [{ databaseIndex: "unique/weapon/axe(1-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/axe(1-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/axe(1-H)/elite", title: "Elite" }] },
  { title: "Axe(2-H)", subCategories: [{ databaseIndex: "unique/weapon/axe(2-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/axe(2-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/axe(2-H)/elite", title: "Elite" }] },
  { title: "Bow", subCategories: [{ databaseIndex: "unique/weapon/bow/normal", title: "Normal" }, { databaseIndex: "unique/weapon/bow/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/bow/elite", title: "Elite" }] },
  { title: "Crossbow", subCategories: [{ databaseIndex: "unique/weapon/crossbow/normal", title: "Normal" }, { databaseIndex: "unique/weapon/crossbow/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/crossbow/elite", title: "Elite" }] },
  { title: "Clubs(1-H)", subCategories: [{ databaseIndex: "unique/weapon/clubs(1-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/clubs(1-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/clubs(1-H)/elite", title: "Elite" }] },
  { title: "Clubs(2-H)", subCategories: [{ databaseIndex: "unique/weapon/clubs(2-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/clubs(2-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/clubs(2-H)/elite", title: "Elite" }] },
  { title: "Dagger", subCategories: [{ databaseIndex: "unique/weapon/dagger/normal", title: "Normal" }, { databaseIndex: "unique/weapon/dagger/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/dagger/elite", title: "Elite" }] },
  { title: "Polearm", subCategories: [{ databaseIndex: "unique/weapon/polearm/normal", title: "Normal" }, { databaseIndex: "unique/weapon/polearm/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/polearm/elite", title: "Elite" }] },
  { title: "Scepter", subCategories: [{ databaseIndex: "unique/weapon/scepter/normal", title: "Normal" }, { databaseIndex: "unique/weapon/scepter/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/scepter/elite", title: "Elite" }] },
  { title: "Spear", subCategories: [{ databaseIndex: "unique/weapon/spear/normal", title: "Normal" }, { databaseIndex: "unique/weapon/spear/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/spear/elite", title: "Elite" }] },
  { title: "Staves", subCategories: [{ databaseIndex: "unique/weapon/staves/normal", title: "Normal" }, { databaseIndex: "unique/weapon/staves/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/staves/elite", title: "Elite" }] },
  { title: "Sword(1-H)", subCategories: [{ databaseIndex: "unique/weapon/sword(1-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/sword(1-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/sword(1-H)/elite", title: "Elite" }] },
  { title: "Sword(2-H)", subCategories: [{ databaseIndex: "unique/weapon/sword(2-H)/normal", title: "Normal" }, { databaseIndex: "unique/weapon/sword(2-H)/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/sword(2-H)/elite", title: "Elite" }] },
  { title: "Throwing", subCategories: [{ databaseIndex: "unique/weapon/throwing/normal", title: "Normal" }, { databaseIndex: "unique/weapon/throwing/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/throwing/elite", title: "Elite" }] },
  { title: "Wand", subCategories: [{ databaseIndex: "unique/weapon/wand/normal", title: "Normal" }, { databaseIndex: "unique/weapon/wand/exceptional", title: "Exceptional" }, { databaseIndex: "unique/weapon/wand/elite", title: "Elite" }] }
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