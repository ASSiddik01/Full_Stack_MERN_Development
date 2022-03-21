const addToDb = (id) => {
  const quentity = localStorage.getItem(id);
  if (quentity) {
      console.log('Old Item')
      const newQuentity = +quentity + 1;
    localStorage.setItem(id, newQuentity);

  } else {
      console.log('New Item')
    localStorage.setItem(id, 1);
  }
};

export { addToDb };
