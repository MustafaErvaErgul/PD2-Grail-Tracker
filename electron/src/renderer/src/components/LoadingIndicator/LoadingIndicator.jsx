import "./LoadingIndicator.css"
import useZustand from "../../hooks/useZustand"

const LoadingIndicator = () => {
  const loadingState = useZustand(state => state.loadingState)

  return (
    <>
      {loadingState &&
        <div className="loading-overlay">
          <div className="loading-indicator"></div>
        </div>
      }
    </>
  )
}

export default LoadingIndicator
