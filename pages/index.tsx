import Home from '@/components/pages/home/Home';
import { NextPageAuth } from '@/providers/private-route.interface';

const HomePage: NextPageAuth = () => {
    return (
        <Home/>
    );
};

export default HomePage;
