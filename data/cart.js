//LocalStorage will give us the string version of our cart so we convert it back to an array using JSON.parse
export let cart = JSON.parse(localStorage.getItem('cart'));

//If the cart is is empty we set it to this default values  
if(!cart) {
  cart = 
  [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 1,
    deliveryOptionId: '1'
  },{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2,
    deliveryOptionId: '2'
  }];
}



function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

//WE move all the cart related functions to this file

//Function for adding items to the cart
export function addToCart(productId){
  let matchingItem;

  //Here we are iterating over each object in the array
  //We do this iteration in order to find the object that has the same name as the product we are trying to add to the cart.
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  //IF we find matching item we increment quantity by 1.
  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}


export function removeFromCart(productId){

  //We create a new temp array and then loop though the cart array and except the productId we add all the other products
  //It's the same as removing the element from the array
  let newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId  !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}


export function updateDeliveryOption(productId,deliveryOptionId){

  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}