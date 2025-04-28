'use client'
import ListIconButton from '@/assets/ListIconButton/list-icon-button';
import styles from './sidebar.module.scss'
import { ActivityIcon, CameraIcon, FriendsIcon, GroupIcon, HomeIcon, LogOutIcon, UserIcon } from '../icons/icons';
import IconButton from '@/assets/IconButton/icon-button';
import { AppColours, FontWeight } from '@/utils/font-util';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconGroup}>
                <ListIconButton
                    icon={<HomeIcon size={18} className={styles.icon} />}
                    title="Home"
                    onClick={() => alert('home button')}
                />
                <ListIconButton
                    icon={<UserIcon size={18} className={styles.icon} />}
                    title="Profile"
                    onClick={() => alert('profile button')}
                />
                <ListIconButton
                    icon={<ActivityIcon size={18} className={styles.icon} />}
                    title="Activity"
                    onClick={() => alert('activity button')}
                />
                <ListIconButton
                    icon={<FriendsIcon size={18} className={styles.icon} />}
                    title="Friends"
                    onClick={() => alert('friends button')}
                />
                <ListIconButton
                    icon={<CameraIcon size={18} className={styles.icon} />}
                    title="Photos"
                    onClick={() => alert('photos button')}
                />
                <ListIconButton
                    icon={<GroupIcon size={18} className={styles.icon} />}
                    title="Groups"
                    onClick={() => alert('groups button')}
                />
            </div>

            <div className={styles.footer}>
                {/* Profile Image Rounded */}
                <div className={styles.profileImg} />
                <IconButton icon={<LogOutIcon size={20} color={AppColours.themeColorSecondarydark} />} iconPosition='end' title='Logout?' onClick={() => alert('Logout Trigger')} />
            </div>
        </div>
    )
}

export default Sidebar;