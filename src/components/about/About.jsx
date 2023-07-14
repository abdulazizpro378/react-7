import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import './About.scss'

const About = ({ image, name }) => {
 
  return (
    <Card className="cardlist" >
    <Card.Img height="230" variant="top" src={image} />
    <Card.Body>
      <Card.Title className="title">{name}</Card.Title>
     
    </Card.Body>
  </Card>
  );
};

About.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};
export default About;
