const qraphiqlLink = `https://graphql.contentful.com/content/v1/spaces/vajel9mfz0r6/`;

const query = `
  {
  furnitureProductCollection {
    items {
      sys{
        id
      }
      creator
      title,
      price,
      image {
        url
      },
      
    }
  }
}
  `;
const timeOut = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve({
      timeOut: true,
      msg: "service timeOut check your connection and refresh :)",
    });
  }, 10000);
});

const contenful = () => {
  return fetch(qraphiqlLink, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer W3UjDMEZRW869nRjFz0i9QwA7KdSZi6KWCirjeEVpJQ",
    },
    body: JSON.stringify({ query }),
  });
};
const localCart = "cart";
const destructureFetchProduct = (item) => {
  const {
    sys: { id },
    image: { url: imageSource },
    price,
    title,
    creator,
  } = item;
  return { imageSource, price, title, creator, id };
};
const fetchProduct = async () => {
  try {
    const response = await Promise.race([contenful(), timeOut]);
    if (!response.timeOut) {
      if (!response.ok) {
        throw new Error("failed to fetch data");
      }
      // console.log(response);
      const {
        data: {
          furnitureProductCollection: { items },
        },
      } = await response.json();
      return items;
    }
    throw new Error(response.msg);
  } catch (error) {
    throw new Error(error.message);
  }
};
const getLocalData = () => {
  const localValue = window.localStorage.getItem(localCart);
  if (localValue === null) {
    // setCart([]);
    return [];
  } else {
    // setCart([...JSON.parse(localValue)]);
    return [...JSON.parse(localValue)];
  }
};

export { localCart, destructureFetchProduct, fetchProduct, getLocalData };
