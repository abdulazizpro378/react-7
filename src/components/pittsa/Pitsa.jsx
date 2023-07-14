import { useContext } from "react";
import { Form } from "react-bootstrap";
import { ProductContext } from "../../context/ProductContent";
import { products } from "../../data/products";
import "./Pitsa.scss";

const Pitsa = () => {
  const { addToCart } = useContext(ProductContext);

  return (
    <section id="Pitsa">
      <div className="pitsa-top">
        <h2>Пицца</h2>
        <Form.Select aria-label="Default select example" className="select">
          <option> menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div className="pittsa-row">
        {products.map((el) => (
          <div key={el.id} className="card">
            <div className="salom">
              <img src={el.image} alt={el.name} />
            </div>
            <div className="card-footer">
              <h4>{el.name}</h4>
              <p>{el.description}</p>
              <div className="buttten_price">
                <button
                  onClick={() => addToCart(el.id)}
                  className="btn-price"
                >
                  Выбрать
                </button>
                <p className="price">от {el.price} ₽</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pitsa;
