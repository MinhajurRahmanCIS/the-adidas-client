import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handelAddProduct = async event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = {
      title,
      brand,
      category,
      price,
      description,
      image_url
    };
    await fetch("https://the-adidas-server.onrender.com/shoes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          toast.success("Product Added Successfully");
          form.reset();
          navigate('/dashboard/all-products')
        }
        else {
          toast.error("Something went wrong!!");
        }
      })

  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-5">Add Product</h1>
      <div className="">
        <form onSubmit={handelAddProduct}>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Title</span>
              </div>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Brand</span>
              </div>
              <input
                type="text"
                name="brand"
                placeholder="Enter Brand"
                className="input input-bordered w-full"
                required
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <input
                type="text"
                name="category"
                placeholder="Enter Category"
                className="input input-bordered w-full"
                required
              />
            </label>


            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                className="input input-bordered w-full "
                required
              />
            </label>

            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Image URL</span>
              </div>
              <input
                type="text"
                name="image_url"
                placeholder="Enter Image URL"
                className="input input-bordered w-full "
                required
              />
            </label>
          </div>

          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <textarea
              placeholder="Description"
              name="description"
              className="textarea textarea-bordered textarea-lg w-full"
              required
            />
          </label>

          <input className="btn btn-neutral w-full my-5" type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;