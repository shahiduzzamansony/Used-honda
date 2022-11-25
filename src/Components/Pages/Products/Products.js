import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Modal from "./Modal";
import ProductCard from "./ProductCard";

const Products = () => {
  const [filterProducts, setFilterProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);
  const { user } = useContext(AuthContext);
  const { type } = useParams();
  const navigate = useNavigate;
  useEffect(() => {
    fetch(`http://localhost:5000/products?type=${type}`)
      .then((res) => res.json())
      .then((data) => setFilterProducts(data))
      .catch((err) => console.error(err));
  }, [type]);
  return (
    <div>
      <div className=" m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {filterProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setModalProduct={setModalProduct}
          ></ProductCard>
        ))}
      </div>
      {user ? (
        <>{modalProduct && <Modal modalProduct={modalProduct}></Modal>}</>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Products;
