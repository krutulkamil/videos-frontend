import { FunctionComponent } from 'react';
import { IChannel } from '@/components/pages/channel/channel.interface';
import Layout from '@/components/layout/Layout';
import Catalog from '@/components/pages/home/catalog/Catalog';
import ChannelInfoSmall from '@/components/ui/channel-info-small/ChannelInfoSmall';
import SubscribeButton from '@/components/ui/subscribe-button/SubscribeButton';

const Channel: FunctionComponent<IChannel> = ({ channel }) => {
    return (
        <Layout title={channel?.name}>
            <div className="mb-10 w-1/3">
                <div className="flex items-center gap-10">
                    <ChannelInfoSmall channel={channel} />
                    <SubscribeButton channelIdForSubscribe={channel.id} />
                </div>
                <article>{channel?.description}</article>
            </div>
            <Catalog newVideos={channel.videos || []} />
        </Layout>
    );
};

export default Channel;