/* eslint-disable react/no-unknown-property */
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartListDetail} = props
      const {id, quantity, cost, imageUrl, name} = cartListDetail
      const onDecrement = () => {
        decrementCartItemQuantity(id)
      }
      const onIncrement = () => {
        incrementCartItemQuantity(id)
      }
      return (
        <>
          <li testid="cartItem" className="mobile-list-cart-item">
            <img
              className="mobile-cart-item-image"
              src={imageUrl}
              alt={imageUrl}
            />
            <div>
              <h1 className="cart-Item-name">{name}</h1>
              <div className="cartItem-quantity-container">
                <button
                  testid="decrement-quantity"
                  type="button"
                  className="decrement-button"
                  onClick={onDecrement}
                >
                  <BsDashSquare />
                </button>
                <span testid="item-quantity" className="cart-item-quantity">
                  {quantity}
                </span>
                <button
                  testid="increment-quantity"
                  type="button"
                  className="increment-button"
                  onClick={onIncrement}
                >
                  <BsPlusSquare />
                </button>
              </div>
              <p testid="total-price" className="cart-item-cost">
                <span>₹ </span>
                {quantity * cost}
              </p>
            </div>
          </li>
          <li testid="cartItem" className="desktop-list-cart-item">
            <div className="desktop-item-container">
              <img
                className="desktop-cart-item-image"
                src={imageUrl}
                alt={imageUrl}
              />
              <h1 className="desktop-cart-item-name">{name}</h1>
            </div>
            <div className="desktop-cartItem-quantity-container">
              <button
                testid="decrement-quantity"
                type="button"
                className="decrement-button"
                onClick={onDecrement}
              >
                <BsDashSquare />
              </button>
              <span
                testid="item-quantity"
                className="desktop-cart-item-quantity"
              >
                {quantity}
              </span>
              <button
                testid="increment-quantity"
                type="button"
                className="increment-button"
                onClick={onIncrement}
              >
                <BsPlusSquare />
              </button>
            </div>
            <p testid="total-price" className="desktop-cart-item-cost">
              <span>₹ </span>
              {quantity * cost}
            </p>
          </li>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartItem
