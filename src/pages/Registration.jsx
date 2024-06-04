import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import GoogleLogin from "../components/Login-Registration/GoogleLogin";
import register from "../assets/register.png";
import toast from "react-hot-toast";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const form = location?.state?.form?.pathname || "/";

  const handelRegistration = event => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const image_url = from.image_url.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirm_password = from.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    if (password === confirm_password) {
      createUser(email, password)
        .then((data) => {
          if (data?.user?.email) {
            const userInfo = {
              email: data?.user?.email,
              name: name,
              image_url: image_url,
            };
            fetch("https://the-adidas-server.onrender.com/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                const userDetails = {
                  displayName: name,
                  photoURL: image_url
                }
                updateUser(userDetails)
                  .then(() => { })
                  .catch(error => console.log(error))
                if (data.token) {
                  toast.success("Registration Successfully!");
                  navigate(form);
                }
                
              });
          }
        });
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={register} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegistration} className="card-body">
            <h1 className="text-4xl text-center font-bold">Registration</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
                required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Image URL"
                className="input input-bordered"
                name="image_url"
                required />
            </div>



            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                name="email"
                required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Please Confirm Password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>

            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            <GoogleLogin form={form} />
            <p className="text-center">Haven't Account! <Link className="link link-hover" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;