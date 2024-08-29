let cart = [];

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

function showCartsidebar(){
    const cartsidebar = document.querySelector('.cartsidebar')
    cartsidebar.style.display = 'flex'
    updateCart();
}

function hideCartsidebar(){
    const cartsidebar = document.querySelector('.cartsidebar')
    cartsidebar.style.display = 'none'
                
}

function addToCart(productName, price, imageurl){
    const product = {name: productName, price: price, imageurl: imageurl };
    cart.push(product);
    updateCart();
}

function removeFromCart(index){
    cart.splice(index, 1);
    updateCart();
}

function updateCart(){
    const cartList = document.querySelector('.cart_items');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart_item');
            cartItem.innerHTML = `<img src="${product.imageurl}" alt="${product.name}" class="cart_item_img"/> 
            <p>${product.name} - $${product.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})" class="remove_button">Remove</button>`;
            cartList.appendChild(cartItem);
        });
    }
}