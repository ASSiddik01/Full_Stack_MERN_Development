// step 1 get input text
const addItem = () => {
    const nameField = document.getElementById('product_name');
    const name = nameField.value;
    // console.log(name)
    // step 8 empty not add to cart
    if (!name) {
        return;
    }
    // step 3 call display product function
    displayProduct(name);
    // step 6 call add to cart
    addToCart(name);



    nameField.value = '';
}
// step 2 display product
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

// step 4 find the cart in local storage
const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    } else {
        cartObj = {};
    }
    return cartObj;
}

// step 5 add product to cart
const addToCart = name => {
    const cart = getCart();
    // cart[name] = 1;
    // console.log(cart);
    // step 10 add existing product 
    if (cart[name]) {
        cart[name] += 1;
    } else {
        cart[name] = 1
    }
    
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}

// step 7 load local storage product
const displayLocalStorageCart = () => {
    const cart = getCart();
    // console.log(cart);
    for (const product in cart) {
        // console.log(product);
        displayProduct(product);
    }
}
displayLocalStorageCart();

// step 9 place order
const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}