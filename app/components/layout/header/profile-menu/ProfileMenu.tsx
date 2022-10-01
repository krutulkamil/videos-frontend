import { FunctionComponent } from 'react';
import styles from './ProfileMenu.module.scss';
import { useAuth } from '../../../../../hooks/useAuth';
import { api } from '@/store/api/api';

const ProfileMenu: FunctionComponent = () => {
    const { user } = useAuth();

    const { data, isLoading } = api.useGetProfileQuery(null, {
        skip: !user
    });

    if (isLoading) return null;

    return (
        <div>{data?.name}</div>
    );
};

export default ProfileMenu;