let db = {};

const addToDb = (item) => {
  // Step 1
  // db[item] = 1;

  // Step 4
  const storedUser = localStorage.getItem("users");
  if (storedUser) {
    db = JSON.parse(storedUser);
  }

  // Step 2
  if (item in db) {
    db[item] = db[item] + 1;
  } else {
    db[item] = 1;
  }

  // Step 3
  localStorage.setItem("users", JSON.stringify(db));
};

// Step 5
const removeFromDb = (item) => {
  const storedUser = localStorage.getItem("users");
  if (storedUser) {
    const previousUser = JSON.parse(storedUser);
    delete previousUser[item];
    localStorage.setItem("users", JSON.stringify(previousUser));
  }
};
