import Header from '../Header'
import Footer from '../Footer'
import DiscountSlider from '../DiscountSlider'
import RestaurantsList from '../RestaurantList'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="mobile-offer-view">
      <DiscountSlider />
    </div>
    <div className="main-restaurant-container">
      <div className="restaurant-container">
        <div className="desktop-offer-view">
          <DiscountSlider />
        </div>
        <RestaurantsList />
      </div>
    </div>
    <Footer />
  </>
)
export default Home
