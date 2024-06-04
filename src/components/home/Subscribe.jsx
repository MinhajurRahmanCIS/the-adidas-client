import { CgAdidas } from "react-icons/cg";

const Subscribe = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <CgAdidas className="text-8xl"></CgAdidas>
            <h1 className="text-5xl font-bold">Subscribe now!</h1>
            <p className="text-md font-semibold my-3">Subscribe to get all latest news from us.</p>
            <div className="join">
                <input className="input input-bordered join-item" placeholder="Enter Email" />
                <button className="btn btn-neutral join-item rounded-r-full">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;