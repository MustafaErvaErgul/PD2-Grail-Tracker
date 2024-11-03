import "./UniqueItemList.css"
import Item from "../Item/Item"

const UniqueItemList = ({
  title,
  items
}) => {

  const sortedItems = items ? [...items].sort((a, b) => a.levelRequirement - b.levelRequirement) : [];

  return (
    <div className="unique-item-list">
      <div className="unique-item-list-title">{title}</div>
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

export default UniqueItemList