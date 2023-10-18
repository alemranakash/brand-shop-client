import  { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  
  const products = useLoaderData();
  const [productDetails, setProductDetails] = useState(products);
  const { id } = useParams();

//   console.log(products);

  useEffect(() => {

    const findProductDetails = products.find((product) => product._id === id);
    setProductDetails(findProductDetails);
  }, [id, products]);

  const handleAddToCard = () => { 
    console.log(productDetails);
  }



  return (
    <div>
      <h1>Product Details: {productDetails.name}</h1>
      <button onClick={handleAddToCard} className="btn">Add to cart</button>
    </div>
  );
};

export default ProductDetails;
