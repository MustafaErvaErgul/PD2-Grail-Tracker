import "./SetItems.css"
import useZustand from "../../hooks/useZustand"
import SetItemList from "../../components/SetItemList/SetItemList"

const SetItems = () => {
  const database = useZustand(state => state.database)

  const setCategories = Object.keys(database['Set']).map(setName => ({
    title: setName,
    items: Object.values(database.Set[setName])
  })).sort((a, b) => a.title.localeCompare(b.title))

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
