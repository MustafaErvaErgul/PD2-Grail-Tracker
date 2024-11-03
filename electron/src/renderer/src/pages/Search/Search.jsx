import "./Search.css"
import useZustand from "../../hooks/useZustand"
import { useRef, useState, useEffect } from "react"
import Item from "../../components/Item/Item"
import { getObjectFromDatabaseIndex } from "../../utils"

const Search = () => {
  const database = useZustand(state => state.database)
  const includeRunewords = database?.includeRunewords
  const includeRunes = database?.includeRunes

  const inputRef = useRef(null)

  const [searchParameter, setSearchParameter] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleValueChange = (e) => {
    const value = e.target.value
    setSearchParameter(value)

    if (value.trim() === "") {
      setSearchResults([])
      return
    } else {
      const results = database.databaseIndexesArray.filter(item => {
        if (!includeRunes && item.rarity === "Rune") {
          return false;
        }
        if (!includeRunewords && item.rarity === "Runeword") {
          return false;
        }

        return (
          (item.displayName.toLowerCase().includes(value.toLowerCase())) ||
          (item.name.toLowerCase().includes(value.toLowerCase())) ||
          (item.setName && item.setName.toLowerCase().includes(value.toLowerCase())) ||
          (item.category && item.category.toLowerCase().includes(value.toLowerCase())) ||
          (item.subCategory && item.subCategory.toLowerCase().includes(value.toLowerCase())) ||
          (item.runes && item.runes.toLowerCase().includes(value.toLowerCase()))
        );
      });

      setSearchResults(results);
    }
  }

  const findItemFromDatabaseIndex = (_item) => {
    const item = getObjectFromDatabaseIndex(database, _item.databaseIndex)
    if (!item) {
      console.error(`${_item.databaseIndex} not found`)
    } else {
      return (
        <Item
          key={item.databaseIndex}
          item={item}
        />
      )
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div id="page-content">
      <div className="search-input-field-container">
        <label htmlFor="search-input-field" className="search-input-field-label">Enter search parameter...</label>
        <input
          id="search-input-field"
          ref={inputRef}
          placeholder="Search"
          value={searchParameter}
          onChange={handleValueChange}
          className="input-field"
        />
      </div>

      {searchResults.length > 0 && searchResults.map((item) => {
        return findItemFromDatabaseIndex(item)
      })}
    </div>
  )

}

export default Search