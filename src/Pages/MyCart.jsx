import {  useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../Provider/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";


const MyCart = () => {

 const {user}= useContext(AuthContext)
 console.log(user);

 const userEmail = user.email
 

 const renderStar = (rating) => {
  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }
  return starIcons;
};

    const loadedCartProducts= useLoaderData()
const [products, setProducts] = useState(loadedCartProducts);
   
console.log(products.email);
console.log(userEmail);


const handleDelete = (id) => {
    swal({
        title: 'Are you sure?',
        text: "Delete Product ?",
        icon: 'warning',
        buttons: true,
        dangerMode: true,
      }).then((result)=>{
        if(result){
          fetch(`http://localhost:4000/myCart/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount > 0){
            swal({
              title: 'Deleted',
              text: 'Product deleted successfully',
              icon:'error'
            })

//for instatnt remove from ui , we will use remaining
            const remaining = products.filter(product => product._id !== id)
            setProducts(remaining)
        }
          })
        } 
      })
}



const userProducts = products.filter(product => product.email === userEmail);

    return (
        <div>
          <Navbar></Navbar>
          <div className="grid lg:grid-cols-2 gap-5">
          {
            userProducts.map((product, idx) => <div key={idx} className="my-5">
           


            <div className="card lg:card-side bg-blue-200 shadow-xl">
              
             <div className="flex flex-row-reverse">
             <img className='rounded-lg w-1/2' src="https://i.ibb.co/6DrTHGD/20231019-154024.jpg" alt="Album" />
              
              <div className="card-body">
                <h2 className='font-bold text-xl text-blue-700'>{product.name}</h2>
                <h2 className='border-red-500 text-red-500 border-[1px] w-fit px-2 rounded-xl'>{product.brandName}</h2>
                <h2 className=''>{product.type}</h2>
                <h2 className='font-semibold text-lg text-black'>Price: {product.price} <span>$</span></h2>
                <div>
                  <p >
                     {renderStar(product.rating)}
                  </p>
                </div>

                <div className="card-actions ">
                <button onClick={()=> handleDelete(product._id)} className="btn">Delete</button>
            
                </div>
              </div>
             </div>
            </div>


            
          
               
        </div>)
           }
          </div>
        </div>
    );
};

export default MyCart;