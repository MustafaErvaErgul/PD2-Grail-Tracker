import "./Runes.css"
import useZustand from "../../hooks/useZustand"
import { convertObjectToArray } from "../../utils"
import Item from "../../components/Item/Item"

const Runes = () => {
  const database = useZustand(state => state.database)

  const runes = convertObjectToArray(database['rune'])

  return (
    <div id="page-content">
      <div className="runes-title">Runes</div>

      <div className="runes-container">
        {runes.map((rune, index) => {
          return (
            <Item
              key={rune.databaseIndex}
              item={rune}
            />
          )
        })}
      </div>
    </div>
  )

}

export default Runes