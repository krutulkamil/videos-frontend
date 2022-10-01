import { FunctionComponent, useState } from 'react';
import styles from './UploadVideo.module.scss';
import stylesIcon from '../icons-right/IconsRight.module.scss';
import { videoApi } from '@/store/api/video.api';
import { HiUpload } from 'react-icons/hi';

const UploadVideo: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<number>(0);

    const [createVideo, { isLoading }] = videoApi.useCreateVideoMutation();

    return (
        <>
            <button
                className={stylesIcon.button}
                disabled={isLoading}
                onClick={() => {
                    createVideo()
                        .unwrap()
                        .then(id => {
                            setVideoId(+id);
                            setIsOpen(true);
                        });
                }}
            >
                <HiUpload/>
            </button>
            {/*<UploadModal isOpen={isOpen} setIsOpen={setIsOpen} videoId={videoId} />*/}
        </>
    );
};

export default UploadVideo;