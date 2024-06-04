import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shoe }) => {
  const { _id, title, brand, price, category, description, image_url } = shoe;

  return (
    <div className="card shadow-xl hover:border" >
            <figure><img className="h-[300px] w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-justify">{description.length >= 200 ? description.slice(0,200) + " ....." : description }</p>
                <p><strong>Brand : </strong>{brand}</p>
                <p><strong>category : </strong>{category}</p>
                <p><strong>Price : $</strong>{price}</p>

                <div className="card-actions justify-end items-center">
                    <Link to={`/products/${_id}`} className="btn btn-neutral">Details</Link >
                </div>
            </div>

        </div>
  );
};

export default SingleProduct;
