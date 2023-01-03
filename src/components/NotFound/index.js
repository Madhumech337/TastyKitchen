import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="not-found">
    <img
      src="https://res.cloudinary.com/dxm6vjeca/image/upload/v1669399210/tasty_kitchen_app/not_found_img_gw738y.svg"
      alt="not found"
      className="not-image"
    />
    <h1>Page Not Found</h1>
    <p className="not-text">
      We are sorry, the page you requested could not be found.Please go back to
      the homepage
    </p>
    <Link to="/">
      <button className="checkout-btn btn" type="button">
        Home Page
      </button>
    </Link>
  </div>
)
export default NotFound
