import { FunctionComponent } from 'react';
import Layout from '@/components/layout/Layout';
import Discover from '@/components/pages/home/discover/Discover';
import Catalog from '@/components/pages/home/catalog/Catalog';
import { IHome } from '@/components/pages/home/home.interface';

const Home: FunctionComponent<IHome> = ({ randomVideo, newVideos, topVideo }) => {
    return (
        <Layout title="Videos | Home Page">
            <Discover/>
            <Catalog/>
        </Layout>
    );
};

export default Home;