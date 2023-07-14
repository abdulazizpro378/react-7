import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { products } from "../data/products";
import { toast } from "react-toastify";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      for (let i = 0; i < cartProducts.length; i++) {
        const { price, quantity } = cartProducts[i];
        total += price * quantity;
      }
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartProducts]);

  const addToCart = (id) => {
    const product = products.find((pr) => pr.id === id);
    const check = cartProducts.find((pr) => pr.id === id);

    let newCartProducts;

    if (check) {
      toast.success("Increase product quantity !");
      newCartProducts = cartProducts.map((pr) => {
        if (pr.id === id) {
          pr.quantity++;
        }
        return pr;
      });
    } else {
      toast.success("Add to cart !");
      newCartProducts = [...cartProducts, { ...product, quantity: 1 }];
    }

    setCartProducts(newCartProducts);
    localStorage.setItem("cart", JSON.stringify(newCartProducts));
  };

  const increaseQuantity = (id) => {
    let newCartProducts = cartProducts.map((pr) => {
      if (pr.id === id) {
        pr.quantity++;
      }
      return pr;
    });
    setCartProducts(newCartProducts);
    localStorage.setItem("cart", JSON.stringify(newCartProducts));
  };

  const decreaseQuantity = (id) => {
    const cartProduct = cartProducts.find((pr) => pr.id === id);
    let newCartProducts = [...cartProducts];
    if (cartProduct.quantity > 1) {
      newCartProducts = cartProducts.map((pr) => {
        if (pr.id === id) {
          pr.quantity--;
        }
        return pr;
      });
    } else {
      let deleteConfirm = window.confirm("Are you sure you want to delete ?");
      if (deleteConfirm) {
        newCartProducts = cartProducts.filter((pr) => pr.id !== id);
      }
    }
    setCartProducts(newCartProducts);
    localStorage.setItem("cart", JSON.stringify(newCartProducts));
  };

  const searchProducts = (query) => {
    // Perform search logic here
    console.log("Searching for products:", query);
    // Example: Filter products based on search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered products:", filteredProducts);
  };

  const contextState = {
    cartProducts,
    totalPrice,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    searchProducts,
  };

  return (
    <ProductContext.Provider value={contextState}>
      {children}
    </ProductContext.Provider>
  );
};

ProductContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ProductContextProvider;
