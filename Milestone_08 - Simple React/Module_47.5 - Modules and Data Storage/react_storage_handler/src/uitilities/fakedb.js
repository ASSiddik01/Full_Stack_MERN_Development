const addToDb = (id) => {
  let shoppingCart;

  // Get Quentity
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }

  // Add Quentity
  const quentity = shoppingCart[id];
  if (quentity) {
    const newQuentity = +quentity + 1;
    shoppingCart[id] = newQuentity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

// Remove form DB
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
      const cartItem = JSON.parse(storedCart);
      if (id in cartItem) {
          delete cartItem[id];
          localStorage.setItem("cart", JSON.stringify(cartItem));
      }
  }
};

export { addToDb, removeFromDb };

// const addToDb = (id) => {
//   const quentity = localStorage.getItem(id);
//   if (quentity) {
//       console.log('Old Item')
//       const newQuentity = +quentity + 1;
//     localStorage.setItem(id, newQuentity);

//   } else {
//       console.log('New Item')
//     localStorage.setItem(id, 1);
//   }
// };
