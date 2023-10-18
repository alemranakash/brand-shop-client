import  { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';

const ProductDetails = () => {
  
  const products = useLoaderData();
  const [productDetails, setProductDetails] = useState(products);
  const { id } = useParams();

//   console.log(products);

  useEffect(() => {

    const findProductDetails = products.find((product) => product._id === id);
    setProductDetails(findProductDetails);
  }, [id, products]);

  const {image, name, brandName, type, price, shortDescription, rating}= productDetails



  const handleAddToCart = () => { 
    const myCartProducts = {image, name, brandName, type, price, shortDescription, rating};
     console.log(myCartProducts);





    fetch('http://localhost:4000/myCart', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(myCartProducts)
})
.then(res => res.json())
.then(data => {
    if(data.insertedId){
        swal({
            title: 'Product Added',
            text: 'Product added to My Cart successfully',
            icon:'success'
          })
    }
  })
  }



  return (
    <div>
      <h1>Product Details: {productDetails.name}</h1>
      <button onClick={handleAddToCart} className="btn">Add to cart</button>
    </div>
  );
};

export default ProductDetails;
