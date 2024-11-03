import "./Item.css"
import useZustand from "../../hooks/useZustand"
import classNames from "classnames"

const Item = ({ item }) => {
  const toggleItemFound = useZustand(state => state.toggleItemFound)
  const missingItemsOnly = useZustand(state => state.missingItemsOnly)
  const trackedItemsOnly = useZustand(state => state.trackedItemsOnly)

  const handleItemFound = () => {
    toggleItemFound(item)
  }

  const shouldRenderItem =
    (!missingItemsOnly || (missingItemsOnly && !item.found)) &&
    (!trackedItemsOnly || (trackedItemsOnly && item.found))

  return (
    <>
      {shouldRenderItem && (
        <div className="item-container" onClick={handleItemFound}>
          <input
            type="checkbox"
            checked={item.found}
            readOnly
            className="item-checkbox"
          />
          <div
            className={classNames("item-name", { "item-name-found": item.found })}>
            {item.displayName}
          </div>
        </div>
      )}
    </>
  );
};

export default Item;
