import { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://the-adidas-server.onrender.com/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
            <h1 className="text-center text-4xl font-bold my-5">All Products : {products.length}</h1>
            <hr />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 my-10">
                {
                    // eslint-disable-next-line react/prop-types
                    products.map(shoe => <SingleProductCardDashboard
                        key={shoe._id}
                        shoe={shoe}
                        onChangeDelete={handleDeleteProduct}
                    />)
                }

            </div>
        </div>
  );
};

export default AllProducts;
