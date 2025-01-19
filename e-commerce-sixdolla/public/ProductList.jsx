

import React from "react";

const ProductList = ({products}) => {
    return (
        <div>
            <h2>Available Products</h2>
            <ul>
                {products.map((products) => (
                    <li key={products.id}>{products.name}
                    <h3>{ptoduct.name}</h3>
                    <p>Price: ${products.price}</p>
                    <button>Add to cart</button>
                    </li>
                    ))};
                
            </ul>
        </div>
    );
};
export default ProductList;