import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();
  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="card lg:card-side border shadow-xl my-10 p-5 hover:bg-slate-100">
            <figure><img className="h-full w-full rounded-e-xl" src={image_url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="text-4xl font-bold">{title}</h2>
                <div className="flex-grow-0 text-md">
                    <p>{description}</p>
                    <p ><strong>Brand : </strong>{brand}</p>
                    <p ><strong>Price : $</strong>{price}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to="/buy-now" className="btn btn-neutral absolute bottom-2 md:bottom-8 lg:bottom-10">Buy Now</Link>
                </div>
            </div>
        </div>
  );
};

export default ProductDetails;
