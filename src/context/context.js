import React, { useState, useEffect, useContext } from "react";
import data from "./data";

const ProductContext = React.createContext();
const localCart = "cart";
const AppContext = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // get local cart
  const getLocalCart = async () => {
    const localValue = window.localStorage.getItem(localCart);
    if (localValue === null) {
      console.log("not Local object ...");
      setCart([]);
    } else {
      setCart([...JSON.parse(localValue)]);
    }
  };
  //   const setCartLocally =()=>{
  //     window.localStorage.setItem(localCart, JSON.stringify(Cart))
  //   }
  const isItemInCart = (id) => {
    const [item] = cart.filter((item) => item.id === id);
    return item || false;
  };
  const addToCart = (id) => {
    const [item] = products.filter((product) => product.id === id);
    const newItem = { ...item, quantity: 1 };
    setCart([...cart, newItem]);
    // get data with id form product
    // add data to cart // create new cart with data in it
    // set localData ...
  };
  console.log(cart);
  const cartItemCalc = () => {
    if (cart.length > 0) {
      return cart.reduce(
        (sum, product) => {
          const { price, quantity } = product;
          sum.totalPrice = sum.totalPrice + price * quantity;
          sum.totalQuantity = sum.totalQuantity + quantity;
          return sum;
        },
        { totalQuantity: 0, totalPrice: 0 }
      );
    }
    return null;
  };

  const getProduct = async () => {
    const newProducts = data?.items.map((product) => {
      const { id } = product.sys;
      const { price, title } = product.fields;
      const { url: imageSource } = product.fields.image.fields.file;
      const { company } = product.fields;
      return { id, price, title, imageSource, company };
    });
    if (!newProducts) return;
    setProduct([...newProducts]);
  };

  useEffect(() => {
    getLocalCart();
    getProduct();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        addToCart,
        isCartOpen,
        setIsCartOpen,
        cartItemCalc,
        isItemInCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { AppContext, useProductContext };
