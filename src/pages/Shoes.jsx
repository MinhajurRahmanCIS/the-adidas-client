import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { CiSearch } from "react-icons/ci";

const Shoes = () => {
    const shoes = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredShoes, setFilteredShoes] = useState(shoes);

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = shoes.filter(shoe =>
            shoe.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredShoes(filtered);
    };

    return (
        <div className="my-10 p-5">
            <form onSubmit={handleSearch} className="mb-5 flex items-center">
                <input
                    type="text"
                    placeholder="Search for shoes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border border-gray-300 rounded mr-2 flex-grow"
                />
                <button type="submit" className="btn btn-neutral"> <CiSearch />Search</button>
            </form>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    // eslint-disable-next-line react/prop-types
                    filteredShoes.map(shoe => <SingleProduct
                        key={shoe._id}
                        shoe={shoe}
                    />)
                }
            </div>
        </div>
    );
};

export default Shoes;
