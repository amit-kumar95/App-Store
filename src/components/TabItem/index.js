import './index.css'

const TabItem = props => {
  const {tabDetails, onActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickButton = () => {
    onActiveTabId(tabId)
  }

  const onActiveButtonClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="listTabItem">
      <button
        type="button"
        onClick={onClickButton}
        className={onActiveButtonClassName}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
