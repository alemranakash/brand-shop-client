import { Link, useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ImageCarousel from '../../Components/ImageCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const renderStars = (rating) => {
  const starIcons = [];
  for (let i = 0; i < rating; i++) {
    starIcons.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }
  return starIcons;
};

const Products = () => {
  const { brandName } = useParams();
  const products = useLoaderData();
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => product.brandName === brandName);

  return (
    <div>
      <ImageCarousel></ImageCarousel>
      <div className="grid lg:grid-cols-2 gap-5">
        {filteredProducts.length === 0 ? ( 
          <div >
            
            <p className='text-end text-2xl'>No products available for this brand.</p>
          </div>
        ) : (
         
          filteredProducts.map((product, idx) => (
            <div key={idx} className="my-5">
              <div className="card lg:card-side bg-blue-200 shadow-xl">
                <figure className="p-4 ">
                  <img className='rounded-lg lg:w-full lg:h-full w-2/3 h-1/2' src={product.image} alt="Album" />
                </figure>
                <div className="card-body">
                  <h2 className='font-bold text-xl text-blue-700'>{product.name}</h2>
                  <h2 className='border-red-500 text-red-500 border-[1px] w-fit px-2 rounded-xl'>{product.brandName}</h2>
                  <h2 className=''>{product.type}</h2>
                  <h2 className='font-semibold text-lg text-black'>Price: {product.price} <span>$</span></h2>
                  <div>
                    <p>
                       {renderStars(product.rating)}
                    </p>
                  </div>

                  <div className="card-actions justify-end">
                    <div className="flex justify-center items-center gap-5">
                      <button
                        className="btn btn-secondary my-2 btn-sm hover-bg-black hover-text-white"
                        onClick={() => navigate(`/productDetails/${product._id}`)}
                      >
                        Details
                      </button>

                      <Link to={`/updateProduct/${product._id}`}>
                        <button className="btn btn-primary btn-sm hover-bg-black hover-text-white">Update</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
