import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const StatisticalReport = () => {
    const [products, setProducts] = useState();
    const [users, setUsers] = useState();
    useEffect(() => {
        fetch("https://the-adidas-server.onrender.com/shoes")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        fetch("https://the-adidas-server.onrender.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    if (!products || !users) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Statistical Report</h1>
            <div className="grid grid-col-1 md:grid-cols-2 gap-5 justify-center items-center my-5">
            <div>
                <h1 className="text-center text-xl font-bold my-5">All Products</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={products}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="title" padding={{ left: 30, right: 30 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="price"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line type="monotone" dataKey="title" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
                <h1 className="text-center text-xl font-bold my-5">All Users</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={users}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip shared={false} trigger="click" />
                        <Legend />
                        <Bar dataKey="age" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
        </div>
    );
};

export default StatisticalReport;