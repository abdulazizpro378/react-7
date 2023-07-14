import { Col } from "react-bootstrap";
import { categories } from "../../data/categories";
import { home } from "../../data/home";

import About from "../about/About";

import "./Home.scss";

const Home = () => {
  return (
    <section id="home">
      <div className="header-card">
        {categories.map((el, i) => (
          <div key={i} className="header-item">
            <img src={el.image} alt="imgae" />
            <h4>{el.name}</h4>
          </div>
        ))}
      </div>
      <div className="home">
        {home.map((pr, i) => (
          <Col className="mb-3" key={i}>
            <About {...pr} />
          </Col>
        ))}
      </div>
    </section>
  );
};

export default Home;
