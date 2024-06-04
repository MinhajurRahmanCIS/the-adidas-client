import contact from "../assets/contactUs.png"
const ContactUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 justify-center items-center gap-20">
                <img src={contact} alt="" />
                <div className="card shrink-0 shadow-2xl border">
                    <h1 className="text-5xl text-center font-bold mt-4">Contact Us</h1>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea placeholder="Your Message" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;