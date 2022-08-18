import React, {useEffect, useState} from "react";
import axios from "axios";
import Product from "./Product"

function ProductList() {
    const [products, setProduct] = useState([])
    
    useEffect(() => {
        const getProducts = async () => {
            const results = await axios.get("https://api.escuelajs.co/api/v1/products");
            setProduct(results.data);
            
        };
        
        getProducts();
    },[]);
    console.log(products)

    return (
    <div className="flex flex-wrap gap-5 justify-center pt-10">
        {products.map((product) => ( 
            <Product product={product} />
        ))}
    </div> 
    );
}

export default ProductList;