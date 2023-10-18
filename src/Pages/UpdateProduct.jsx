

const AddProductForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const name = e.target.name.value;
    const brandName = e.target.brand_name.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    
    const rating = e.target.rating.value;
const newProduct = {image, name, brandName, type, price, rating};
console.log(newProduct);
    
    // console.log(image, name, brandName, type, price, shortDescription, rating);


  };

  return (
  <div>
      <h1 className="text-center text-4xl my-10">Update Product</h1>
      <div className="max-w-md mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleFormSubmit}
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
            defaultValue=""
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
            defaultValue=""
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
            defaultValue="Apple"
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
            defaultValue=""
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
            defaultValue=""
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
            defaultValue=""
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type=""
          >
           Details
          </button>
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

export default AddProductForm;
