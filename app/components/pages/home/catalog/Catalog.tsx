import { FunctionComponent } from 'react';
import styles from './Catalog.module.scss';
import Heading from '@/components/ui/heading/Heading';
import VideoItem from '@/components/ui/video-item/VideoItem';
import { IVideo } from '@/types/video.interface';

const Catalog: FunctionComponent<{
    newVideos: IVideo[],
    removeHandler?: (videoId: number) => void,
    isUpdateLink?: boolean
}> = ({ isUpdateLink, newVideos, removeHandler }) => {
    return (
        <div className={styles.recommended}>
            <div className={styles.top_block}>
                <Heading title={removeHandler ? 'My videos' : 'Recommendations'} />
            </div>

            <div className={styles.catalog}>
                {newVideos.map(video => (
                    <VideoItem
                        key={video.id}
                        item={video}
                        removeHandler={removeHandler}
                        isUpdateLink={isUpdateLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Catalog;