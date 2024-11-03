import useZustand from "./hooks/useZustand"
import { useState, useEffect, act } from "react"
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator"

import Navigator from "./components/Navigator/Navigator"
import Home from "./pages/Home/Home"
import UniqueArmor from "./pages/UniqueArmor/UniqueArmor"
import UniqueWeapons from "./pages/UniqueWeapons/UniqueWeapons"
import UniqueOther from "./pages/UniqueOther/UniqueOther"
import SetItems from "./pages/SetItems/SetItems"
import Runewords from "./pages/Runewords/Runewords"
import Runes from "./pages/Runes/Runes"
import Search from "./pages/Search/Search"

const App = () => {
  const database = useZustand(state => state.database)
  const readDatabase = useZustand(state => state.readDatabase)
  const showToast = useZustand(state => state.showToast)
  const markItemAsFound = useZustand(state => state.markItemAsFound)

  const [activePageIndex, setActivePageIndex] = useState(0)

  const pages = [
    { index: 0, content: Home, title: "Home" },
    { index: 1, content: UniqueArmor, title: "Unique Armor" },
    { index: 2, content: UniqueWeapons, title: "Unique Weapons" },
    { index: 3, content: UniqueOther, title: "Unique Other" },
    { index: 4, content: SetItems, title: "Set Items" },
    ...(database?.includeRunewords ? [{ index: 5, content: Runewords, title: "Runewords" }] : []),
    ...(database?.includeRunes ? [{ index: 6, content: Runes, title: "Runes" }] : []),
    { index: 9, content: Search, title: "Search" }
  ]

  const handleOutsideClick = (event) => {
    if (event.target.id === 'root') {
      window.api.hideOverlay()
    }
  }

  const handleCtrlF = (event) => {
    if (event.ctrlKey && event.keyCode === 6) {
      setActivePageIndex(9)
    }
  };

  const itemCopyHandler = (event) => {
    setTimeout(() => {
      try {
        const clipboardValue = window.api.clipboard.readText();
        const parsedValue = JSON.parse(clipboardValue);
        let itemName = null

        if (parsedValue.runeword) {
          itemName = parsedValue.runeword
        } else if (parsedValue.type && parsedValue.type.includes("Rune")) {
          itemName = parsedValue.type
        } else if (parsedValue.name) {
          itemName = parsedValue.name
        }

        if (!itemName) {
          showToast("error", "Error!", `Invalid input!`)
          return
        }

        markItemAsFound(itemName)
      } catch (error) {
        console.error(error)
        showToast("error", "Error!", `Invalid input!`)
      }
    }, 100)
  }

  useEffect(() => {
    readDatabase()
    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keypress', handleCtrlF);
    window.api.handleItemCopy(itemCopyHandler)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keypress', handleCtrlF);
      window.api.handleItemCopy(() => { })
    }
  }, [])

  const ActivePage = pages.find(item => item.index === activePageIndex)?.content || Home;

  return (
    <div id="content-container">
      <LoadingIndicator />


      <Navigator
        pages={pages}
        activePageIndex={activePageIndex}
        setActivePageIndex={setActivePageIndex}
      />

      {database && <ActivePage />}
    </div>
  )
}

export default App
