import { Link } from "react-router-dom";

const BrandCard = ({brandCard}) => {
// console.log(brandCard);

const {brand_name, brand_image}= brandCard




    return (
        <div  className="mt-10 ">
            <Link to={`/products/${brand_name}`}>
        <div  className="flex  justify-center py-4 px-4 rounded-lg mx-auto items-center w-fit bg-blue-700  rounded-m">
   <div className="" >
  
       <img className="p-2 rounded-xl lg:h-[200px] lg:w-[300px]" src={brand_image} alt="" />
   
    
       <h1 className="text-xl font-semibold text-white text-center mx-auto">{brand_name}</h1>
    
   </div>
 </div>
 </Link>
   </div>
    );
};

export default BrandCard;