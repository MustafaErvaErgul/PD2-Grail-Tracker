import "./Navigator.css"
import classNames from "classnames"
import ConfigurationDropdown from "../ConfigurationDropdown/ConfigurationDropdown"

const Navigator = ({
  pages,
  activePageIndex,
  setActivePageIndex
}) => {

  const handlePageChange = (index) => {
    setActivePageIndex(prevState => index)
  }

  return (
    <div className="navigator">
      {pages.map((element, index) => {
        return (
          <button
            key={index}
            onClick={() => handlePageChange(element.index)}
            className={classNames("navigator-button", { "navigator-button-active": activePageIndex === element.index })}
          >
            {element.title}
          </button>
        )
      })}

      <ConfigurationDropdown />
    </div>
  )

}

export default Navigator