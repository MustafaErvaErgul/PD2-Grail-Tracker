import "./ConfigurationDropdown.css"
import useZustand from "../../hooks/useZustand"
import { useState } from "react"

const ConfigurationDropdown = () => {

  const database = useZustand(state => state.database)
  const setDatabase = useZustand(state => state.setDatabase)
  const writeToDatabase = useZustand(state => state.writeToDatabase)

  const missingItemsOnly = useZustand(state => state.missingItemsOnly)
  const setMissingItemsOnly = useZustand(state => state.setMissingItemsOnly)
  const trackedItemsOnly = useZustand(state => state.trackedItemsOnly)
  const setTrackedItemsOnly = useZustand(state => state.setTrackedItemsOnly)
  const includeRunewords = database?.includeRunewords
  const includeRunes = database?.includeRunes


  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }

  const handleMissingItemsChange = (isChecked) => {
    setMissingItemsOnly(isChecked)
    if (isChecked) {
      setTrackedItemsOnly(false)
    }
  }

  const handleTrackedItemsChange = (isChecked) => {
    setTrackedItemsOnly(isChecked)
    if (isChecked) {
      setMissingItemsOnly(false)
    }
  }

  const handleIncludeRunewordsChange = () => {
    const newIncludeRunewords = !includeRunewords

    const updatedDatabase = {
      ...database,
      includeRunewords: newIncludeRunewords,
    }

    setDatabase(updatedDatabase)
    writeToDatabase()
  }

  const handleIncludeRunesChange = () => {
    const newIncludeRunes = !includeRunes

    const updatedDatabase = {
      ...database,
      includeRunes: newIncludeRunes,
    }

    setDatabase(updatedDatabase)
    writeToDatabase()
  }

  return (
    <div
      className="configuration-dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="configuration-button">Configurations</button>
      {isOpen && (
        <div className="configuration-dropdown">
          <div className="toggle-option">
            <label>
              <input
                type="checkbox"
                checked={missingItemsOnly}
                onChange={(e) => handleMissingItemsChange(e.target.checked)}
              />
              Missing Items Only
            </label>
          </div>
          <div className="toggle-option">
            <label>
              <input
                type="checkbox"
                checked={trackedItemsOnly}
                onChange={(e) => handleTrackedItemsChange(e.target.checked)}
              />
              Tracked Items Only
            </label>
          </div>
          <div className="toggle-option">
            <label>
              <input
                type="checkbox"
                checked={includeRunewords}
                onChange={handleIncludeRunewordsChange}
              />
              Include Runewords
            </label>
          </div>
          <div className="toggle-option">
            <label>
              <input
                type="checkbox"
                checked={includeRunes}
                onChange={handleIncludeRunesChange}
              />
              Include Runes
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ConfigurationDropdown
