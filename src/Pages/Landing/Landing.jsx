import React from "react";
import CarouselComponent from "../../Components/Carousel/Carousels";
import Category from "../../Components/Category/Category";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";

const Landing = () => {
    return (
        <Layout>
            <CarouselComponent />
            <Category />
            <Product />
        </Layout>
    );
};

export default Landing;