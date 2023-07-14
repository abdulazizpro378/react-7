import './Footer.scss'
import img_1 from '../../assets/images/pittsa.svg'
const Footer = () => {
  return (
    <footer>
      <div className="container">

        <div className="footer-row">
          <div className="item">
            <ul>
              <li><img src={img_1} alt="" />Куда Пицца</li>
              <li>© Copyright 2021 — Куда Пицца</li>

            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Куда пицца</li>
              <li>О компании</li>
              <li>Пользовательское соглашение</li>
              <li>Условия гарантии</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Куда пицца</li>
              <li>О компании</li>
              <li>Пользовательское соглашение</li>
              <li>Условия гарантии</li>
            </ul>
          </div>
          <div className="item">
            <ul>
              <li>Помощь</li>
              <li>О компании</li>
              <li>Пользовательское соглашение</li>
              <li>Условия гарантии</li>
            </ul>
          </div>
       
        </div>
      </div>
    </footer>
  )
}

export default Footer