/* eslint-disable react/prop-types */
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const SingleProductCardDashboard = ({ shoe, onChangeDelete }) => {
  const token = localStorage.getItem("token");
  const { _id, title, brand, category, price, description, image_url } = shoe;

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`https://the-adidas-server.onrender.com/shoes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data) {
              toast.success("Product Removed");
              onChangeDelete(id);
            }
            else {
              toast.error("Something went wrong!!");
            }
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success"
        });
      }
    });
  };

  return (
    <div className="card shadow-xl hover:border" >
      <figure><img className="h-[300px] w-full" src={image_url} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">{description.length >= 200 ? description.slice(0,200) + " ....." : description}</p>
        <p><strong>Brand : </strong>{brand}</p>
        <p><strong>Category : </strong>{category}</p>
        <p><strong>Price : $</strong>{price}</p>

        <div className="card-actions justify-end items-center">
          <Link to={`/products/${_id}`} className="btn btn-neutral">Details</Link >

          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1"><CiMenuKebab /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box border items-center">
              <li><Link to={`edit/${_id}`}><FaRegEdit />Update</Link></li>
              <li><button onClick={() => handelDelete(_id)}><RiDeleteBin5Line />Remove</button></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleProductCardDashboard;
