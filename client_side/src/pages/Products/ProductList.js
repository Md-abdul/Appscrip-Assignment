import React, { useEffect, useState } from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import Spinner from "../Components/Spinner";

const ProductList = ({ isSidebarOpen }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState(new Set());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const DescriptionLimit = (description) => {
    return description.split(" ").slice(0, 3).join(" ") + "...";
  };

  const ProductNameLimit = (title) => {
    return title.split(" ").slice(0, 2).join(" ") + "...";
  };

  const handleLikeClick = (productId) => {
    setLikedProducts((prev) => {
      const updatedLikes = new Set(prev);
      if (updatedLikes.has(productId)) {
        updatedLikes.delete(productId);
      } else {
        updatedLikes.add(productId);
      }
      return updatedLikes;
    });
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center "
        style={{ marginLeft: "40rem" }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 px-4 md:px-8 lg:px-32 ${
        isSidebarOpen
          ? "grid-cols-2 sm:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-4"
      }`}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="shadow-sm h-ProductCardHeight lg:w-fullscreenWidth sm:w-SmallScrrenWidth"
        >
          <div className="bg-ProductImageBackGround">
            <img
              src={product.image}
              alt={product.title}
              className="h-Imageheight w-full object-contain mb-4 p-4 sm:p-6"
              style={{ mixBlendMode: "darken" }}
            />
          </div>

          <div className="mt-4 px-2">
            <h2 className="text-lg font-semibold mb-2 truncate">
              {ProductNameLimit(product.title)}
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-gray-700 text-sm">
                {DescriptionLimit(product.description)}
              </p>
              {likedProducts.has(product.id) ? (
                <PiHeartFill
                  onClick={() => handleLikeClick(product.id)}
                  className="h-5 w-5 cursor-pointer text-red-500"
                />
              ) : (
                <PiHeartLight
                  onClick={() => handleLikeClick(product.id)}
                  className="h-5 w-5 cursor-pointer text-gray-500"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
