import "./SetItems.css"
import useZustand from "../../hooks/useZustand"
import SetItemList from "../../components/SetItemList/SetItemList"

const SetItems = () => {
  const database = useZustand(state => state.database)

  const setCategories = Object.keys(database['set']).map(setName => {
    const items = Object.values(database.set[setName])

    const title = items[0]?.setNameDisplayName

    return {
      title,
      items
    }
  }).sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div id="page-content">
      <div className="sets-container">
        {setCategories.map((setCategory, index) => {
          return (
            <div key={setCategory.title} className="set-container">
              <div className="set-title">{setCategory.title}</div>

              <SetItemList
                items={setCategory.items}
              />
            </div>
          )
        })}
      </div>
    </div>
  )

}

export default SetItems
