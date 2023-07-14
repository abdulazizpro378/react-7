// import { Fragment, useContext } from "react";
// import PropTypes from "prop-types";

// import { ProductContext } from "../../context/ProductContent";
// import './CartCart.scss';

// const CartCart = ({ id, image, name, description, quantity,price}) => {
//   const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);
//   return (
//     <Fragment>

//     <div className="cart-row">
//       <div className="cart-body">
//         <img src={image} alt="logo" />
//         <h5>{name}</h5>
//         <p>{description}</p>
//       </div>
//       <div className="cart-price">
//         <div className="quantity-buttons">
//           <button className="line-1" onClick={() => decreaseQuantity(id)}>-</button>
//           <button className="line-2">{quantity}</button>
//           <button className="line-3" onClick={() => increaseQuantity(id)}>+</button>
//         </div>
//         <p>{price} ₽</p>
//       </div>

 
//     </div>
//     </Fragment>
//   );
// };

// CartCart.propTypes = {
//   id: PropTypes.number,
//   image: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
//   quantity: PropTypes.number,
//   price: PropTypes.number,
// };

// export default CartCart;


import { Fragment, useContext } from "react";
import PropTypes from "prop-types";

import { ProductContext } from "../../context/ProductContent";
import './CartCart.scss';

const CartCart = ({ id, image, name, description, quantity, price }) => {
  const { increaseQuantity, decreaseQuantity } = useContext(ProductContext);

  const handleIncreaseQuantity = () => {
    increaseQuantity(id);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(id);
  };

  const calculateUpdatedPrice = () => {
    return price * quantity;
  };

  const updatedPrice = calculateUpdatedPrice();

  return (
    <Fragment>
      <div className="cart-row">
        <div className="cart-body">
          <img src={image} alt="logo" />
          <h5>{name}</h5>
          <p>{description}</p>
        </div>
        <div className="cart-price">
          <div className="quantity-buttons">
            <button className="line-1" onClick={handleDecreaseQuantity}>-</button>
            <button className="line-2">{quantity}</button>
            <button className="line-3" onClick={handleIncreaseQuantity}>+</button>
          </div>
          <p>{updatedPrice} ₽</p>
        </div>
      </div>
    </Fragment>
  );
};

CartCart.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default CartCart;
