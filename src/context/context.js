import React, { useState, useEffect, useContext } from "react";
// import data from "./data";
import {
  localCart,
  destructureFetchProduct,
  fetchProduct,
  getLocalData,
} from "./helper";

// explore?access_token=W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ`

// create context
const ProductContext = React.createContext();

// context provider
const AppContext = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState(() => getLocalData());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productPageProducts, setProductPageProduct] = useState([]);
  const [loadError, setLoadError] = useState({
    state: false,
    message: "",
  });

  const getProduct = React.useCallback(async () => {
    try {
      const data = await fetchProduct();
      const processedProduct = data?.map((product) => {
        const item = destructureFetchProduct(product);
        return item;
      });
      if (!processedProduct) return;
      setProduct([...processedProduct]);
      setProductPageProduct([...processedProduct]);
      setIsLoading(false);
    } catch (error) {
      // console.log(error);
      setLoadError({ state: true, message: error.message });
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  useEffect(() => {
    const setCartLocally = () => {
      window.localStorage.setItem(localCart, JSON.stringify(cart));
    };
    setCartLocally();
  }, [cart]);

  const isItemInCart = (id) => {
    const [item] = cart.filter((item) => item.id === id);
    return item || false;
  };

  const addToCart = (id) => {
    //is item in later
    const [item] = products.filter((product) => product.id === id);
    const newItem = { ...item, quantity: 1, cartType: "cart" };
    setCart([...cart, newItem]);
    // console.log(cart);
  };

  const changeCartType = (id, type) => {
    //remove item from cart
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.cartType = type;
        item.quantity = 1;
      }
      return item;
    });
    // console.log(cart);
    setCart([...newCart]);
    // console.log(cart);
  };

  const increaseItemQuantity = (id) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });
    setCart([...newCart]);
  };

  const isItemQuantityLessThanTwo = (id) => {
    const [item] = cart.filter((item) => item.id === id);
    if (item.quantity < 2) {
      return true;
    }

    return false;
  };
  //delete item
  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart([...newCart]);
  };

  const decreaseItemQuantity = (id) => {
    const isItemLessThanTwo = isItemQuantityLessThanTwo(id);
    if (isItemLessThanTwo) {
      deleteItem(id);
    } else {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity - 1;
        }
        return item;
      });
      setCart([...newCart]);
    }
  };

  const cartItemCalc = () => {
    if (cart.length > 0) {
      return (
        cart
          // .filter((item) => item.cartType === "cart")
          .reduce(
            (sum, product) => {
              const { price, quantity } = product;
              sum.totalPrice = sum.totalPrice + price * quantity;
              sum.totalQuantity = sum.totalQuantity + quantity;
              return sum;
            },
            { totalQuantity: 0, totalPrice: 0 }
          )
      );
    }
    return null;
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
        isLoading,
        loadError,
        isCartOpen,
        productPageProducts,
        addToCart,
        deleteItem,
        isItemInCart,
        cartItemCalc,
        setIsCartOpen,
        changeCartType,
        decreaseItemQuantity,
        increaseItemQuantity,
        setProductPageProduct,
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
