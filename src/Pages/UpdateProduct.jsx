import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const UpdateProduct = () => {

  const products = useLoaderData()

  console.log(products);

const {_id, image, name, brand_name, type, price, rating}= products



  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const updatedImage = e.target.image.value;
    const updatedName = e.target.name.value;
    const updatedBrandName = e.target.brand_name.value;
    const updatedType = e.target.type.value;
    const updatedPrice = e.target.price.value;
     const updatedRating = e.target.rating.value;

const updatedProduct = {
  image: updatedImage, 
  name: updatedName, 
  brand_name: updatedBrandName, 
  type: updatedType, 
  price: updatedPrice, 
  rating: updatedRating
};
console.log(updatedProduct);
    
   
swal({
  title: 'Are you sure?',
  text: "Want to update this product ?",
  icon: 'warning',
  buttons: true,
  dangerMode: true,
}).then((result) => {
  if (result) {
      fetch(`https://brand-shop-server-dhvpwtq9r-akashs-projects-91b81bb4.vercel.app/products/${_id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedProduct)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data.modifiedCount > 0) {
                  swal({
                      title: 'Product Updated',
                      text: 'Product updated successfully',
                      icon: 'success'
                  })
              }
          })
  }
})



  };








  return (
  <div>
      <h1 className="text-center text-4xl my-10">Update Product</h1>
      <div className="max-w-md mx-auto">
      <form
        className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleUpdateProduct}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            className="input rounded-md input-bordered"
            required
            defaultValue={image || ''}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Product Name"
            className="input rounded-md input-bordered"
            required
            defaultValue={name || ''}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand_name">
            Brand Name
          </label>
          <select
            name="brand_name"
            id="brand_name"
            className="input rounded-md input-bordered"
            defaultValue={brand_name || ''}
          >
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="Sony">Sony</option>
            <option value="Google">Google</option>
            <option value="Intel">Intel</option>
            <option value="Microsoft">Microsoft</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <input
            type="text"
            name="type"
            id="type"
            placeholder="Product Type"
            className="input rounded-md input-bordered"
            required
            defaultValue={type || ''}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            className="input rounded-md input-bordered"
            required
            defaultValue={price || ''}
          />
        </div>
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="text"
            name="rating"
            id="rating"
            placeholder="Rating"
            className="input rounded-md input-bordered"
            required
            defaultValue={rating || ''}
          />
        </div>
       

        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default UpdateProduct;
