import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList

  return (
    <li className="app-card">
      <img className="app-image" src={imageUrl} alt={appName} />
      <p className="app-heading">{appName}</p>
    </li>
  )
}

export default AppItem
