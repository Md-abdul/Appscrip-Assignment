import React, { useEffect, useState } from "react";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import Spinner from "../Components/Spinner";
import styles from "../CustomeStyle/ProductList.module.css";

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
      <div className={styles.spinnerContainer}>
        <Spinner />
      </div>
    );
  }

  return (
    <div
      className={`${styles.productListContainer} ${
        isSidebarOpen ? styles.gridThreeColumns : styles.gridFourColumns
      }`}
    >
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <div className={styles.productImageContainer}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
          </div>

          <div className={styles.productDetails}>
            <h2 className={styles.productTitle}>
              {ProductNameLimit(product.title)}
            </h2>
            <div className="flex items-center justify-between">
              <p className={styles.productDescription}>
                {DescriptionLimit(product.description)}
              </p>
              {likedProducts.has(product.id) ? (
                <PiHeartFill
                  onClick={() => handleLikeClick(product.id)}
                  className={`${styles.likeIcon} ${styles.likeIconFilled}`}
                />
              ) : (
                <PiHeartLight
                  onClick={() => handleLikeClick(product.id)}
                  className={`${styles.likeIcon} ${styles.likeIconEmpty}`}
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
