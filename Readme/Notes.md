# Main idea of Javascript

1. Save the data
2. Generate the HTML
3. Make it interactive


### Benefits of Generating the HTML

- If we want to add more products we don't need to copy paste the HTML rather we just need to add the product information in the products array


### Syntax for data attribute in HTML

- Is just an HTML attribute
- Have to start with "data-"
- Then after that give it any name
- For ex: `data-product-name="${product.name }"`



## Challenges faced and solutions

- Problem - Issue with adding a logo beside the title 
- solution - Did Ctrl + F5 to refresh with cache bypass 

- Some other precautions:

✅ Place file in same directory.

✅ Rename image to amazon-logo.png

✅ Resize to 32x32

✅ Refresh with cache bypass (Ctrl+F5)



- Problem: Upon clicking the add to cart button how do the program knows which product to add to the cart?

- Solution: We use data attribute to tackle this problem
  - Is is just another HTML attribute
  - Allows us to attach any information to an element



- Problem: In our website we can have two products with same name and different brands so just giving the data attribute as productName is not enough

Solution: To fix this :
  - Give each product an id.
  - This id should be unique.