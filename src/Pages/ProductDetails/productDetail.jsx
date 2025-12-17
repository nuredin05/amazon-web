import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Utils/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/productCard";
import Loader from "../../Components/Loader/Loader";
const productDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        setisLoading(true)
        axios
            .get(`${productUrl}/products/${productId}`)
            .then((res) => {
                setProduct(res.data);
                setisLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setisLoading(false);
            });
    }, []);
    return (
        <Layout>
            {isLoading ? (
                <Loader />
            ) : (
                <ProductCard
                    product={product}
                    flex={true}
                    renderDesc={true}
                    renderAdd={true} />
            )}
        </Layout>
    );
};

export default productDetails;