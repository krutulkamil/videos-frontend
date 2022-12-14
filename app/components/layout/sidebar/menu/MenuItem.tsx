import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Menu.module.scss';
import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';
import { useAuth } from '../../../../hooks/useAuth';

const MenuItem: FunctionComponent<{ item: IMenuItem }> = ({ item }) => {
    const { user } = useAuth();
    const { asPath } = useRouter();

    if (item.link === '/my-channel') {
        if (!user) return null;
        else item.link = `/c/${user?.id}`;
    }

    return (
        <li>
            <Link href={item.link}>
                <a className={asPath === item.link ? styles.active : ''}>
                    <span className={item.image ? styles.image : ''}>
                        {item.icon && <item.icon/>}
                        {item.image && <Image src={item.image} width={40} height={40} alt={item.title}/>}
                    </span>
                    <b>{item.title}</b>
                </a>
            </Link>
        </li>
    );
};

export default MenuItem;