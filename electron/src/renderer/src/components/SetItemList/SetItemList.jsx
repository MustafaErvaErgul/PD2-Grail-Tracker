import "./SetItemList.css"
import Item from "../Item/Item"

const SetItemList = ({
  items
}) => {

  const sortedItems = items ? [...items].sort((a, b) => a.levelRequirement - b.levelRequirement) : [];

  return (
    <div className="set-item-list">
      {sortedItems.map((item, index) => {
        return (
          <Item
            key={item.databaseIndex}
            item={item}
          />
        )
      })}
    </div>
  )

}

export default SetItemList