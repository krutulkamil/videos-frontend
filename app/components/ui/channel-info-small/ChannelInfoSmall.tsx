import { FunctionComponent } from 'react';
import styles from './ChannelInfoSmall.module.scss';
import { formatNumberToK } from '@/utils/format-number-to-k';
import { IUser } from '@/types/user.interface';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';

const ChannelInfoSmall: FunctionComponent<{ channel: IUser, message?: string }> = ({ message, channel }) => {
    return (
        <div className={styles.profile_info}>
            {channel?.avatarPath && <UserAvatar user={channel} />}

            <div>
                <div className={styles.name}>{channel?.name}</div>
                <div className={styles.subscribers_count}>
                    {message || formatNumberToK(channel.subscribersCount!) + ' subscribers'}
                </div>
            </div>
        </div>
    );
};

export default ChannelInfoSmall;