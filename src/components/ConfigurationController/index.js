import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNav,
        showRightNav,
        onShowContent,
        onShowLeftNav,
        onShowRightNav,
      } = value
      const onToggleShowContent = () => {
        onShowContent()
      }
      const onToggleLeftNav = event => {
        onShowLeftNav(event.target.value)
      }
      const onToggleRightNav = event => {
        onShowRightNav(event.target.value)
      }

      return (
        <div className="container">
          <h1>Layout</h1>
          <ul className="ul-container">
            <li>
              <input
                type="checkbox"
                id="cb1"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="cb1">Content</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="cb2"
                checked={showLeftNav}
                onChange={onToggleLeftNav}
              />
              <label htmlFor="cb2">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="cb3"
                checked={showRightNav}
                onChange={onToggleRightNav}
              />
              <label htmlFor="cb3">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
