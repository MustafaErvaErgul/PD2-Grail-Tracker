import "./Runewords.css"
import useZustand from "../../hooks/useZustand"
import { convertObjectToArray } from "../../utils"
import Item from "../../components/Item/Item"

const Runewords = () => {
  const database = useZustand(state => state.database)

  const runewords = convertObjectToArray(database['Runeword'])

  return (
    <div id="page-content">
      <div className="runewords-title">Runewords</div>

      <div className="runewords-container">
        {runewords.map((runeword, index) => {
          return (
            <Item
              key={runeword.databaseIndex}
              item={runeword}
            />
          )
        })}
      </div>
    </div>
  )

}

export default Runewords