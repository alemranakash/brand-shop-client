import  { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../Components/Navbar";

const ProductDetails = () => {

  const {user}= useContext(AuthContext)
  // console.log(user);

  const email = user.email
  // console.log(email);
  
  const products = useLoaderData();
  const [productDetails, setProductDetails] = useState(products);
  const { id } = useParams();

//   console.log(products);

  useEffect(() => {

    const findProductDetails = products.find((product) => product._id === id);
    setProductDetails(findProductDetails);
  }, [id, products]);

  const {image, name, brandName, type, price, shortDescription, rating}= productDetails


  const renderStars = (rating) => {
    const starIcons = [];
    for (let i = 0; i < rating; i++) {
      starIcons.push(<FontAwesomeIcon icon={faStar} key={i} />);
    }
    return starIcons;
  };


  const handleAddToCart = () => { 
    const myCartProducts = {image, name, email, brandName, type, price, shortDescription, rating};
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
    <div className="">
    <Navbar></Navbar>
      <div className="card lg:card-side bg-blue-200 shadow-xl mt-20">
              <figure className="p-4 ">
                <img className='rounded-xl' src="https://i.ibb.co/6DrTHGD/20231019-154024.jpg" alt="Album" />
              </figure>
              <div className="card-body">


             <div className="flex justify-between">
             <div>
                <p className="text-5xl text-orange-500">
                     {renderStars(productDetails.rating)}
                  </p>
                </div>
                <h2 className='font-semibold text-6xl text-black'><span className="text-3xl">$</span>{productDetails.price} </h2>
             </div>


                <h2 className='font-bold text-4xl text-blue-700 mt-10 '>{productDetails.name}</h2>
                
                <h2 className=' mt-10 text-2xl w-fit px-2 rounded-xl font-semibold'><span className="border-none">From</span> {productDetails.brandName}</h2>
                
               
               


                <div className="card-actions justify-end">
                 
                </div>
                <button onClick={handleAddToCart} className="btn btn-primary mt-10 w-fit">Add to cart</button>
              </div>
            </div>


      
    </div>
  );
};

export default ProductDetails;
