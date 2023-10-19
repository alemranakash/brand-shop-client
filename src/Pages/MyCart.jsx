import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const MyCart = () => {

    const loadedCartProducts= useLoaderData()
const [products, setProducts] = useState(loadedCartProducts);
   

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

    return (
        <div>
           {
            products.map((product, idx) => <div key={idx} className="my-5">
            <h1>{product.name}</h1>
            <h1>{product.brandName}</h1>
            <div>
              
                <button onClick={()=> handleDelete(product._id)} className="btn">Delete</button>
            </div>
        </div>)
           }
        </div>
    );
};

export default MyCart;