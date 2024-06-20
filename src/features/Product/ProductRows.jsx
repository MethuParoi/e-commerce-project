import { useContext, useEffect, useState } from "react";
import HomeCard from "../../ui/HomeCard";
import useProduct from "../../services/FakeApi";
import LoadingContext from "../../ContextApi/LoadingContext";
import { useNavigate } from "react-router-dom";
import SortContext from "../../ContextApi/SortContext";

function ProductRows({ RowHeading }) {
  const { setIsLoading } = useContext(LoadingContext);
  const { data, error } = useProduct(setIsLoading);

  const { sortedProducts } = useContext(SortContext);
  const ProductDesc = sortedProducts ? sortedProducts : data;

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.error("An error occurred:", error.message);
    }
  }, [error]);

  return (
    <div className="py-7 px-7">
      <button
        className="pb-5"
        onClick={() => {
          navigate("/home");
        }}
      >
        &larr; Back to home
      </button>
      <div className="flex justify-between">
        <h2 className="text-2xl pb-2 font-semibold ">{RowHeading}</h2>
      </div>
      <div className="border-b-2 border-gray-400"></div>
      <div className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-36 mx-auto max-w-screen-2xl">
          {data &&
            ProductDesc.map((product) => (
              <HomeCard
                key={product.id}
                id={product.id}
                category={product.category}
                img={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductRows;
