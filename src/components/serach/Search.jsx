import { Fragment, useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContent";
import "./Search.scss";

const Search = () => {
  const { searchProducts, getProducts } = useContext(ProductContext);
  const [address, setAddress] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    searchProducts(address); // Call the searchProducts function with the search input value
    setAddress(""); // Clear the input field after submitting
    getProducts(); // Fetch the products again (optional)
  };

  const handleChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <p>Проверить адрес доставки</p>
          <input
            type="text"
            placeholder="Адрес"
            className="control-input"
            value={address}
            onChange={handleChange}
          />
          <button type="submit" className="btn-search">
            Проверить
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default Search;
