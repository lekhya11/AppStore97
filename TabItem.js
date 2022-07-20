import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const updateClassName = isActive ? `button active` : `button`
  return (
    <li className="button-tabs">
      <button type="button" className={updateClassName} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
