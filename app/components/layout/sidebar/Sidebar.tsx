import { FunctionComponent } from 'react';
import Link from 'next/link';
import Menu from '@/components/layout/sidebar/menu/Menu';
import styles from './Sidebar.module.scss';
import { menu } from '@/components/layout/sidebar/menu/menu.data';
import { useAuth } from '@/hooks/useAuth';
import { api } from '@/store/api/api';

const Sidebar: FunctionComponent = () => {
    const { user } = useAuth();

    const { data, isLoading } = api.useGetProfileQuery(null, {
        skip: !user
    });

    return (
        <aside className={styles.sidebar}>
            <Link href="/">
                <a className={styles.logo}>
                    Videos 1.0
                </a>
            </Link>

            <Menu title="Menu" items={menu} />

            {user && <Menu title="My subscriptions" items={
                data?.subscriptions.map(({ toChannel }) => ({
                    image: toChannel.avatarPath,
                    title: toChannel.name,
                    link: '/c/' + toChannel.id
                })) || []
            } />}

            <div className={styles.copy}>
                © 2022 VIDEOS 1.0 for learning purposes.
            </div>
        </aside>
    );
};

export default Sidebar;