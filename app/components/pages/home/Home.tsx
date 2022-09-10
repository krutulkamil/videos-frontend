import { FunctionComponent } from "react";
import Layout from "@/components/layout/Layout";
import Discover from "@/components/pages/home/discover/Discover";
import Catalog from "@/components/pages/home/catalog/Catalog";

const Home: FunctionComponent = () => {
    return (
        <Layout title="Videos | Home Page">
            <Discover />
            <Catalog />
        </Layout>
    );
};

export default Home;