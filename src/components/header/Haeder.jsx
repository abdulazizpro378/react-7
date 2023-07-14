import "./Header.scss";

import location from "../../assets/images/lacation.svg";
import person from "../../assets/images/person.svg";
import pittsa from "../../assets/images/pittsa.svg";
import box from "../../assets/images/box.svg";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContent";
import { NavLink } from "react-router-dom";

const Haeder = () => {
  const { cartProducts } = useContext(ProductContext);

  console.log(cartProducts);

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="nav-item-left">
            <div className="logo">
          
              <img src={location} alt="logo" />
              <p>Москва</p>
            </div>
            <p>Проверить адрес</p>
            <p> Среднее время доставки*: 00:24:19</p>
          </div>
          <div className="nav-item-right">
            <p>Время работы: с 11:00 до 23:00</p>
            <img src={person} alt="person" />
            <p>Войти в аккаунт</p>
          </div>
        </nav>
        <div className="pittsa">
          <div className="pittsa-left">
            <img src={pittsa} alt="pittsa" />
            <p>Kuda pittsa</p>
          </div>
          <div className="pittsa-right">
            <button className="btn-header-2">
              <NavLink to="/cart" className="nav-link">
                <img src={box} alt="logo2" />
                {cartProducts.length}
              </NavLink>
              P
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Haeder;
