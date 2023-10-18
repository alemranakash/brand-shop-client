import swal from 'sweetalert';

const AddProduct = () => {


    const handleFormSubmit = (e) => {
        e.preventDefault();
      
        // Extract form field values
        const image = e.target.image.value;
        const name = e.target.name.value;
        const brandName = e.target.brand_name.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const shortDescription = e.target.short_description.value;
        const rating = e.target.rating.value;
      
     const newProducts = {image, name, brandName, type, price, shortDescription, rating};
     console.log(newProducts);
        
     fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProducts)
      })
      .then(res => res.json())
      .then(data=>{
        console.log(data)
    
    //after successful added we can show a sweetAlert
    
    if(data.insertedId){
    swal({
          title: 'Product Added',
          text: 'Product added successfully',
          icon:'success'
        })
    }
    })
    
    
    
    
  
      
        // e.target.reset();
      };
      




    return (
        <div>
            <h1 className="text-center text-4xl my-10">Add Product</h1>
          <div className="max-w-md mx-auto">
  <form onSubmit={handleFormSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
        Image URL
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image"
        type="text"
        placeholder="Image URL"
        name="image"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Product Name"
        name="name"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
        Brand Name
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="brand"
        name="brand_name"
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
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="type"
        type="text"
        placeholder="Product Type"
        name="type"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
        Price
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="price"
        type="text"
        placeholder="Product Price"
        name="price"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        Short Description
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        placeholder="Short Description"
        name="short_description"
        rows="3"
      ></textarea>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
        Rating
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="rating"
        type="number"
        placeholder="Product Rating"
        name="rating"
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Add Product
      </button>
    </div>
  </form>
</div>
  
        </div>
    );
};

export default AddProduct;