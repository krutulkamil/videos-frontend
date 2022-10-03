import { NextPageAuth } from '@/providers/private-route.interface';
import Layout from '@/components/layout/Layout';
import Menu from '@/components/layout/sidebar/menu/Menu';
import { api } from '@/store/api/api';

const MySubscriptionsPage: NextPageAuth = () => {
    const { data } = api.useGetProfileQuery(null);
    return (
        <Layout title="My subscriptions">
            <Menu
                title="My subscriptions"
                items={
                    data?.subscriptions.map(({ toChannel }) => ({
                        title: toChannel.name,
                        image: toChannel.avatarPath,
                        link: `/c/${toChannel.id}`
                    })) || []
                }
            />
        </Layout>
    );
};

export default MySubscriptionsPage;