import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import ImageCarousel from "../../Components/ImageCarousel";

const Products = () => {

    const { brandName } = useParams();
const products = useLoaderData()
const navigate = useNavigate();

// console.log(products);

// const normalizedBrandName = brandName.toLowerCase(); 

// const filteredProducts = products.filter((product) =>
//   product.brand_name.toLowerCase() === normalizedBrandName
// );


const filteredProducts = products.filter(
    (product) => product.brandName === brandName
  );

//   console.log(filteredProducts);

    return (
        <div>
            <ImageCarousel></ImageCarousel>
            {
                filteredProducts.map((product, idx) => <div key={idx} className="my-5">
                    <h1>{product.name}</h1>
                    <h1>{product.brandName}</h1>
                    <button
                            className="btn"
                            onClick={() => navigate(`/productDetails/${product._id}`)}
                        >
                            Details
                        </button>
                </div>)
            }
        </div>
    );
};

export default Products;