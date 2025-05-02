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

1. Problem - Issue with adding a logo beside the title 
- solution - Did Ctrl + F5 to refresh with cache bypass 

- Some other precautions:

✅ Place file in same directory.

✅ Rename image to amazon-logo.png

✅ Resize to 32x32

✅ Refresh with cache bypass (Ctrl+F5)



2.  Problem: Upon clicking the add to cart button how do the program knows which product to add to the cart?

- Solution: We use data attribute to tackle this problem
  - Is is just another HTML attribute
  - Allows us to attach any information to an element



3. Problem: In our website we can have two products with same name and different brands so just giving the data attribute as productName is not enough

Solution: To fix this :
  - Give each product an i
  - This id should be unique.


4. Problem: Naming conflicts while importing it with script tags

solution: Adding multiple <script> tags without type="module" dumps everything into the global namespace — leading to conflicts. So we need o create a module and import it with <script type="module">

> Steps to get a variable out of a file

1. Add type="module" to the script tag
2. Export the variable
3. Import the variable