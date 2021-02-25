const qraphiqlLink = `https://graphql.contentful.com/content/v1/spaces/vajel9mfz0r6/`;

const query = `
  {
  furnitureProductCollection {
    items {
      sys{
        id
      }
      title,
      price,
      image {
        url
      },
      creator
      
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
  }, 1000);
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

export { localCart, contenful, timeOut };
