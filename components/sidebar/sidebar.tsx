'use client'
import ListIconButton from '@/assets/ListIconButton/list-icon-button';
import styles from './sidebar.module.scss'
import { ActivityIcon, CameraIcon, FriendsIcon, GroupIcon, HomeIcon, LogOutIcon, UserIcon } from '../icons/icons';
import IconButton from '@/assets/IconButton/icon-button';
import { AppColours } from '@/utils/font-util';

const Sidebar = () => {
    const menuOptions = [
        {
            key: '1',
            icon: HomeIcon,
            title: 'Home',
            onClick: () => alert('Home button'),
        },
        {
            key: '2',
            icon: UserIcon,
            title: 'Profile',
            onClick: () => alert('Profile button'),
        },
        {
            key: '3',
            icon: ActivityIcon,
            title: 'Activity',
            onClick: () => alert('Activity button'),
        },
        {
            key: '4',
            icon: FriendsIcon,
            title: 'Friends',
            onClick: () => alert('Friends button'),
        },
        {
            key: '5',
            icon: CameraIcon,
            title: 'Photos',
            onClick: () => alert('Photos button'),
        },
        {
            key: '6',
            icon: GroupIcon,
            title: 'Groups',
            onClick: () => alert('Groups button'),
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.iconGroup}>
                {menuOptions.map(opt => (
                    <ListIconButton key={opt.key} title={opt.title} onClick={opt.onClick} icon={opt.icon} />
                ))}
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