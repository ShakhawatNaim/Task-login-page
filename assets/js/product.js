// Get all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add click event listener to add to cart buttons
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Add to cart button click handler
function addToCartClicked(event) {
  const button = event.target;
  const productCard = button.parentElement.parentElement;
  const productId = button.getAttribute('data-id');
  const productTitle = 
  productCard.querySelector('.product-title').innerText;
  const productPrice = productCard.querySelector('.product-price').innerText;

  // Check if the product is already in the cart
  const cartItem = document.querySelector(`.cart-items li[data-id="${productId}"]`);
  if (cartItem) {
    // If the product is already in the cart, increase its quantity
    const quantity = cartItem.querySelector('.cart-item-quantity');
    quantity.innerText = parseInt(quantity.innerText) + 1;
  } else {
    // If the product is not in the cart, add it to the cart
    const cartItems = document.querySelector('.cart-items');
    const cartItem = `
      <li class="cart-item" data-id="${productId}">
        <span class="cart-item-title">${productTitle}</span>
        <span class="cart-item-price">${productPrice}</span>
        <div class="quantity-controls">
          <button class="quantity-btn decrease-quantity-btn">-</button>
          <span class="cart-item-quantity">1</span>
          <button class="quantity-btn increase-quantity-btn">+</button>
        </div>
        <button class="remove-from-cart-btn">X</button>
      </li>
    `;
    cartItems.innerHTML += cartItem;

    // Add click event listener to remove from cart button
    const removeButtons = document.querySelectorAll('.remove-from-cart-btn');
    removeButtons.forEach(button => {
      button.addEventListener('click', removeFromCartClicked);
    });

    // Add click event listener to increase quantity button
    const increaseQuantityButtons = document.querySelectorAll('.increase-quantity-btn');
    increaseQuantityButtons.forEach(button => {
      button.addEventListener('click', increaseQuantityClicked);
    });

    // Add click event listener to decrease quantity button
    const decreaseQuantityButtons = document.querySelectorAll('.decrease-quantity-btn');
    decreaseQuantityButtons.forEach(button => {
      button.addEventListener('click', decreaseQuantityClicked);
    });
  }

  // Update cart total
  updateCartTotal();
}

// Remove from cart button click handler
function removeFromCartClicked(event) {
  const button = event.target;
  const cartItem = button.parentElement;
  const productId = cartItem.getAttribute('data-id');

  // Remove cart item from the cart
  cartItem.remove();

  // Update cart total
  updateCartTotal();
}

// Increase quantity button click handler
function increaseQuantityClicked(event) {
  const button = event.target;
  const cartItem = button.parentElement.parentElement;
  const quantity = cartItem.querySelector('.cart-item-quantity');
  quantity.innerText = parseInt(quantity.innerText) + 1;

  // Update cart total
  updateCartTotal();
}

// Decrease quantity button click handler
function decreaseQuantityClicked(event) {
  const button = event.target;
  const cartItem = button.parentElement.parentElement;
  const quantity = cartItem.querySelector('.cart-item-quantity');
  const newQuantity = parseInt(quantity.innerText) - 1;
  if (newQuantity > 0) {
    quantity.innerText = newQuantity;

    // Update cart total
    updateCartTotal();
  } else {
    // If quantity is 0, remove the cart item from the cart
    cartItem.remove();

    // Update cart total
    updateCartTotal();
  }
}

 // Update cart total
 function updateCartTotal() {
  const cartItems = document.querySelectorAll(".cart-item");
  let total = 0;
  cartItems.forEach((item) => {
    const price = item.querySelector(".cart-item-price").innerText;
    const quantity = item.querySelector(".cart-item-quantity").innerText;
    total += parseFloat(price.replace("$", "")) * parseInt(quantity);
  });
  const cartTotal = document.querySelector(".cart-total");
  cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}
