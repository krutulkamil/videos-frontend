import { FunctionComponent } from 'react';
import styles from './IconsRight.module.scss';
import { useAuth } from '@/hooks/useAuth';
import ProfileMenu from '@/components/layout/header/profile-menu/ProfileMenu';
import UploadVideo from '@/components/layout/header/upload-video/UploadVideo';
import AuthForm from '@/components/layout/header/auth-form/AuthForm';

const IconsRight: FunctionComponent = () => {
    const { user } = useAuth();

    return (
        <div className={styles.icons}>
            {user ? (
                <>
                    <ProfileMenu/>
                    <UploadVideo/>
                </>
            ) : (
                <AuthForm/>
            )}
        </div>
    );
};

export default IconsRight;