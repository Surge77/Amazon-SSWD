export const cart = []

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
      quantity: 1
    });
  }
}