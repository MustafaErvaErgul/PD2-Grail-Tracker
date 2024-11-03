import "./Home.css"
import useZustand from "../../hooks/useZustand"

const Home = () => {
  const database = useZustand(state => state.database)
  const includeRunewords = database?.includeRunewords
  const includeRunes = database?.includeRunes

  const totalUniqueItems = database?.totalUniqueItems
  const totalUniqueItemsFound = database?.totalUniqueItemsFound

  const totalSetItems = database?.totalSetItems
  const totalSetItemsFound = database?.totalSetItemsFound

  const totalRunewords = database?.totalRunewords || 0
  const totalRunewordsFound = database?.totalRunewordsFound || 0

  const totalRunes = database?.totalRunes || 0
  const totalRunesFound = database?.totalRunesFound || 0

  const totalItems = totalUniqueItems + totalSetItems + (includeRunes ? totalRunes : 0) + (includeRunewords ? totalRunewords : 0)
  const totalItemsFound = totalUniqueItemsFound + totalSetItemsFound + (includeRunes ? totalRunesFound : 0) + (includeRunewords ? totalRunewordsFound : 0)

  return (
    <div className="home-page" id="page-content">
      <table className="home-page-summary-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Found</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Unique</td>
            <td>{totalUniqueItemsFound}</td>
            <td>{totalUniqueItems}</td>
          </tr>

          <tr>
            <td>Set</td>
            <td>{totalSetItemsFound}</td>
            <td>{totalSetItems}</td>
          </tr>

          {includeRunewords && (
            <>
              <tr>
                <td>Runewords</td>
                <td>{totalRunewordsFound}</td>
                <td>{totalRunewords}</td>
              </tr>
            </>
          )}

          {includeRunes && (
            <>
              <tr>
                <td>Runes</td>
                <td>{totalRunesFound}</td>
                <td>{totalRunes}</td>
              </tr>
            </>
          )}

          <tr>
            <td>Total</td>
            <td>{totalItemsFound}</td>
            <td>{totalItems}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home;
