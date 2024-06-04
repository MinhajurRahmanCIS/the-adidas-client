import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";

const Dashboard = () => {
    const [error, setError] = useState("");
    const { user, updateNewPassword } = useAuth();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        fetch(`https://the-adidas-server.onrender.com/user/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user]);


    if (!userInfo) {
        return <LoadingSpinner />
    }

    const { name, age, mobileNumber, nationality, address, image_url } = userInfo;

    const handelChangePassword = event => {
        setError("");
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            setError("Password didn't matched");
        }
        else {
            setError("");
            updateNewPassword(password)
                .then(() => {
                    toast.success("Password Change Successfully");
                })
                .catch(error => {
                    setError(error);
                    console.log(error)
                })
        }

    };

    return (
        <div className="">
            {
                user?.photoURL || image_url
                    ?
                    <div className="avatar">
                        <div className="w-40 rounded-full">
                            <img src={user?.photoURL || image_url} />
                        </div>
                    </div>

                    :
                    <div className="avatar">
                        <div className="w-40 rounded-full border">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" />
                        </div>
                    </div>
            }

            <form>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Name</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Please Update Name"
                            className="input input-bordered w-full"
                            defaultValue={name}
                            disabled
                        />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Email</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            defaultValue={user?.email}
                            disabled
                        />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Nationality</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Nationality"
                            className="input input-bordered w-full "
                            defaultValue={nationality ? nationality : "Please Update"}
                            disabled
                        />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Mobile Number</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="input input-bordered w-full "
                            defaultValue={mobileNumber}
                            disabled
                        />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Age</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="input input-bordered w-full "
                            defaultValue={age}
                            disabled
                        />
                    </label>

                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text">Address</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Phone Address"
                            className="input input-bordered w-full"
                            defaultValue={address ? address : "Please Update"}
                            disabled
                        />
                    </label>
                </div>

                <Link to="/dashboard/profile/edit" className="btn btn-neutral w-full my-5">Update Profile</Link>

            </form>

            <div>
                <h1 className="text-xl font-semibold">Change Your Password</h1>
                <form onSubmit={handelChangePassword}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">New Password</span>
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
                            <span className="label-text">Confirm New Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Please Confirm Password"
                            className="input input-bordered"
                            name="confirm_password"
                            required
                        />
                    </div>

                    {error && (
                        <div className="my-2">
                            <p className="text-red-500">Passwords do not match! Please Check Your Password</p>
                        </div>
                    )}

                    <input className="btn btn-neutral mt-5" type="submit" value="Change Password" />

                </form>
            </div>
        </div>
    );
};

export default Dashboard;
