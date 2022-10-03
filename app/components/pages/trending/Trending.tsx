import { FunctionComponent } from 'react';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import { IVideo } from '@/types/video.interface';

const Trending: FunctionComponent<{ topVideos: IVideo[]}> = ({ topVideos }) => {
    return (
        <Layout title="Trending" >
            <Catalog newVideos={topVideos} />
        </Layout>
    );
};

export default Trending;