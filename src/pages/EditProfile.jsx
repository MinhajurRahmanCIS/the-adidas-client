import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export default function EditProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, updateUser } = useAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) {
      setIsLoading(false);
      return;
    }

    fetch(`https://the-adidas-server.onrender.com/user/${user?.email}`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        setUserInfo(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [token, user?.email]);

  if (isLoading || !userInfo) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { email, name, age, mobileNumber, nationality, address, image_url } = userInfo;

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const nationality = form.nationality.value;
    const address = form.address.value;
    const age = form.age.value;
    const mobileNumber = form.mobileNumber.value;
    const image_url = form.image_url.value;

    const info = {
      name,
      age,
      mobileNumber,
      nationality,
      address,
      image_url
    };

    fetch(`https://the-adidas-server.onrender.com/userInformation/${userInfo?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(info)
    })
      .then(res => res.json())
      .then(data => {
        const userDetails = {
          displayName: name,
          photoURL: image_url
        }
        updateUser(userDetails)
          .then(() => {
            toast.success("Information Provided");
            navigate("/dashboard/home");
          })
          .catch(error => console.log(error))
      })
  };
  return (
    <div className="max-w-[1440px] mx-auto shadow-2xl">
      <h1 className="text-4xl text-center font-bold my-10">Please Provide Information</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered"
              name="email"
              defaultValue={email}
              required
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              name="name"
              defaultValue={user?.displayName || name}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Picture URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Picture URL"
              className="input input-bordered"
              name="image_url"
              defaultValue={user?.photoURL || image_url}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nationality</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Nationality"
              className="input input-bordered"
              name="nationality"
              defaultValue={nationality}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Age"
              className="input input-bordered"
              name="age"
              defaultValue={age}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="input input-bordered"
              name="mobileNumber"
              defaultValue={mobileNumber}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="input input-bordered"
              name="address"
              defaultValue={address}
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-neutral" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
