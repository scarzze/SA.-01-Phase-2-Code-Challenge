
# SixDolla.io - E-Commerce Cart Application 

## Overview  
SixDolla.io is a simple React-based e-commerce cart application. Users can browse products, add them to a cart, update quantities, and view a summary with the total price.  

This project demonstrates the core concepts of React, including **components**, **props**, **state management**, and **events**.

---

## Features by Phase  

### Phase 1: Initial Setup  
- **Project Initialization**:  
  Set up a new React project using **Vite** for fast and modern builds.  
  Installed required dependencies:  
  ```bash
  npm create vite@latest sixdolla
  npm install

    Basic File Structure:
    Created core files for the app:
        App.jsx
        ProductList.jsx
        Cart.jsx

 ## Phase 2: Displaying Products

    Static Product List:
    Rendered a list of predefined products in the ProductList component.
    Each product displays:
        Name
        Price
        "Add to Cart" button

    Product Data:
    Hardcoded product data used in App.jsx:

    const products = [
      { id: 1, name: "Lamboghini", price: 200000 },
    { id: 2, name: "Bugatti", price: 400000 },
    { id: 3, name: "Tesla", price: 60000},
    { id: 4, name: "Ferrari", price: 150000 },
    { id: 5, name: "Range Rover", price: 50000 },
    ];

 ## Phase 3: Adding to the Cart

    State Management:
    Used React's useState to manage cart items in App.jsx.
    Users can:
        Add a product to the cart.
        Increment product quantity if it’s already in the cart.

 ## Phase 4: Cart Functionality

    Cart Display:
    Added a Cart component to show:
        Product name, price, and quantity.
        Total price of all items in the cart.

    Dynamic Cart Updates:
    Users can:
        View items in the cart dynamically.
        Remove products or update quantities.

Usage

    Clone the repository:

git clone https://github.com/scarzze/sixdolla.git
cd sixdolla

 ## Install dependencies:

npm install

Run the application:

    npm run dev

    Open the app in your browser:
    http://localhost:5173

Next Steps

    Implement user authentication.
    Add a database to persist cart data.
    Enhance the user interface with animations and styling.

Made by ScarTech