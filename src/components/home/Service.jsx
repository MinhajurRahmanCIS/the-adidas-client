import { GiRunningShoe, GiSoccerKick } from "react-icons/gi";
import { PiSneakerMoveDuotone } from "react-icons/pi";

const Service = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <div className="card card-compact shadow-xl bg-slate-100 rounded-none hover:bg-slate-200">
                <div className="flex justify-center text-8xl my-2">
                    <PiSneakerMoveDuotone />
                </div>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Never loss</h2>
                </div>
            </div>
            <div className="card card-compact shadow-xl bg-slate-200 rounded-none hover:bg-slate-300">
                <div className="flex justify-center text-8xl my-2">
                    <GiRunningShoe />
                </div>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Stylish</h2>
                </div>
            </div>
            <div className="card card-compact shadow-xl bg-slate-100 hover:bg-slate-200 rounded-none">
                <div className="flex justify-center text-8xl my-2">
                    <GiSoccerKick />
                </div>
                <div className="card-body">
                    <h2 className="text-center text-xl font-bold">Never Miss Goals</h2>
                </div>
            </div>
        </div>

    );
};

export default Service;