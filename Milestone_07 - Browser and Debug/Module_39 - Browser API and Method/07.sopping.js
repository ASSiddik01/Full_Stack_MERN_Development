// step 1 get input text
const addItem = () => {
    const nameField = document.getElementById('product_name');
    const name = nameField.value;
    // console.log(name)
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
    cart[name] = 1;
    // console.log(cart);
    const cartStringfied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringfied);
}