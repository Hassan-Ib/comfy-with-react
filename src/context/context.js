import React, { useState, useEffect, useContext } from "react";
import data from "./data";

// const client = contentful.createClient({
//   // This is the space ID. A space is like a project folder in Contentful terms
//   space: "vajel9mfz0r6",
//   // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//   accessToken: "W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ",
// });

const ProductContext = React.createContext();
const localCart = "cart";
const AppContext = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productPageProducts, setProductPageProduct] = useState([]);

  // get local cart
  const getLocalData = async () => {
    const localValue = window.localStorage.getItem(localCart);
    if (localValue === null) {
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
    //is item in later
    const [item] = products.filter((product) => product.id === id);
    const newItem = { ...item, quantity: 1, cartType: "cart" };
    setCart([...cart, newItem]);
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
    setCart([...newCart]);
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

  const timeOut = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 500);
    });
  };
  const getProduct = React.useCallback(async () => {
    try {
      // const contentfull = await Promise.race([
      //   client.getEntries({
      //     content_type: "furnitureProduct",
      //   }),
      //   timeOut(),
      // ]);
      // const newProducts = contentfull.items.map((product) => {
      const newProducts = data?.items.map((product) => {
        const { id } = product.sys;
        const { price, title } = product.fields;
        const { url: imageSource } = product.fields.image.fields.file;
        const { company } = product.fields;
        return { id, price, title, imageSource, company };
      });
      if (!newProducts) return;
      setProduct([...newProducts]);
      setProductPageProduct([...newProducts]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getLocalData();
    getProduct();
  }, [getProduct]);

  return (
    <ProductContext.Provider
      value={{
        cart,
        products,
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
