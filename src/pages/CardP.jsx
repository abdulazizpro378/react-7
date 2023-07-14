import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import CartCart from "../components/cart/CartCart";
import { ProductContext } from "../context/ProductContent";
import "./CardP.scss"
const CardP = () => {
  const { cartProducts,totalPrice } = useContext(ProductContext);

  return (
    <Row className="row-top">
           <h1 className="text-center">Total Price {totalPrice}</h1>
      {cartProducts.map((pr) => (
        <Col className="mb-3" key={pr.id} >
          <CartCart {...pr} />
        </Col>
      ))}
    </Row>
  );
};

export default CardP;
