import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Utils/endPoints";
import ProductCard from "../../Components/Product/productCard";
import classes from "./Result.module.css";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
    const { categoryName } = useParams();
    const [result, setResult] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true)
        axios
            .get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
                // Ensure array
                //  console.log(res)
                setResult(res.data);
                setisLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setisLoading(false);
            });
    }, []);

    return (
        <Layout>
            {isLoading ? (
                <Loader />
            ) : (
                <section>
                    <h1 style={{ padding: "30px" }}>Results</h1>
                    <p style={{ padding: "30px" }}>Category/{categoryName}</p>
                    <hr />
                    <div className={classes.products_container}>
                        {result?.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    renderDesc={false}
                                    renderAdd={true}
                                />
                            );
                        })}
                    </div>
                </section>
            )}

            {/* <div> Results</div> */}
        </Layout>
    );
};

export default Results;