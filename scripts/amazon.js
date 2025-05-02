//For the product array refer the products.js file inside the data folder.

// To generate the HTML for each product, we will use a function in a forEach loop that takes a product object as an argument and returns a string of HTML.

//Here product is the object that we are passing to the function. 
// We use template literals to put the dynamic values in the HTML string.

import {cart} from '../data/cart.js';

let productsHTML = '';


products.forEach((product) => {
  productsHTML += ` 
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
                ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents/100).toFixed(2)} 
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;

});


//This puts the generated HTML under the products grid in the HTML file.
document.querySelector('.js-products-grid').innerHTML = productsHTML;


//button.dataset gets us the data attributes from the button element.
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; //This gets converted from kebab case to camelCase

    let matchingItem;

    //Here we are iterating over each object in the array
    //We do this iteration in order to find the object that has the same name as the product we are trying to add to the cart.
    cart.forEach((item) => {
      if(productId === item.productId){
        matchingItem = item;
      }
    });

    //IF we find matching item we increment quantity by 1.
    if(matchingItem){
      matchingItem.quantity += 1;
    }else{
      cart.push({
        productId: productId,
        quantity: 1
      });
    }


    // Steps to make the Cart button interactive
    // 1. Calculate the quantity
    // 2.Put the quantity on the page
    // 3. This increases the cart quantity on the page

    let cartQuantity = 0;
    
    //loops through each object in array 
    cart.forEach((item) => {
      cartQuantity += item.quantity
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    
  });
});