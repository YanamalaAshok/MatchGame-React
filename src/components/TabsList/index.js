import './index.css'

const TabList = props => {
  const {eachTab, onThumbnailClick1, isActive} = props
  const {tabId, displayText} = eachTab
  const thumbnailClick = () => {
    onThumbnailClick1(tabId)
  }
  const viewCategory = isActive ? 'colorYellow' : 'colorWhite'
  return (
    <li>
      <button
        className={`${viewCategory} button`}
        type="button"
        onClick={thumbnailClick}
      >
        {displayText}
        <hr className={viewCategory} />
      </button>
    </li>
  )
}

export default TabList
