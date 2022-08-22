import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import Spinner from "./Spinner";
import useAxios from "../hooks/useAxios";

function ProductList() {
  // const [products, setProduct] = useState([]);
  const { data, isLoading, error } = useAxios("https://api.escuelajs.co/api/v1/products");

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const results = await axios.get(
  //       "https://api.escuelajs.co/api/v1/products"
  //     );
  //     setProduct(results.data);
  //   };

  //   getProducts();
  // }, []);
  // console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap gap-5 justify-center pt-10">
      <Spinner />
      {data.map((data) => (
        <Product product={data} />
      ))}
    </div>
  );
}

  export default ProductList;
