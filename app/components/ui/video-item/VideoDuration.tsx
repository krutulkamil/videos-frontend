import { FunctionComponent } from 'react';
import styles from './VideoItem.module.scss';

const VideoDuration: FunctionComponent<{ duration: number, isBottom?: boolean}> = ({ duration, isBottom }) => {
    return (
        <time className={isBottom ? styles.bottom : ''}>{duration} min.</time>
    );
};

export default VideoDuration;