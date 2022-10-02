import { FunctionComponent } from 'react';
import styles from './Discover.module.scss';
import { IVideo } from '@/types/video.interface';
import LargeVideoItem from '@/components/ui/video-item/LargeVideoItem';

interface IDiscover {
    topVideo: IVideo,
    randomVideo: IVideo
}

const Discover: FunctionComponent<IDiscover> = ({ randomVideo, topVideo }) => {
    return (
        <div className={styles.discover}>
            <div className={styles.top_video}>
                <LargeVideoItem video={topVideo} />
            </div>

            <div className={styles.random_video}>
                <LargeVideoItem video={randomVideo}/>
            </div>
        </div>
    );
};

export default Discover;