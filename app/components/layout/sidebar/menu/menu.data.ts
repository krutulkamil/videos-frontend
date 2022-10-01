import { IMenuItem } from '@/components/layout/sidebar/menu/menu.interface';
import { HiChartBar, HiCollection, HiHome, HiStar } from 'react-icons/hi';

export const menu: IMenuItem[] = [
    {
        title: 'Home Page',
        icon: HiHome,
        link: '/'
    },
    {
        title: 'Trending',
        icon: HiChartBar,
        link: '/trending'
    },
    {
        title: 'My Channel',
        icon: HiStar,
        link: '/my-channel'
    },
    {
        title: 'Subscriptions',
        icon: HiCollection,
        link: '/subscriptions'
    }
];