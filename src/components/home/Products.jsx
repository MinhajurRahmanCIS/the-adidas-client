/* eslint-disable no-undef */
import SingleProduct from "../SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div className="my-10 p-5">
            <h1 className="text-4xl text-center font-bold my-5">Our Top Products</h1>
            <hr />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-5">
                {
                    // eslint-disable-next-line react/prop-types
                    data.slice(0, 3).map(shoe => <SingleProduct
                        key={shoe._id}
                        shoe={shoe}
                    />)
                }

            </div>
        </div>
  );
};

export default Products;
