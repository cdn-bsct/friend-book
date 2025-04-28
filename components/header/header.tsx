import { ActivityIcon, LogOutIcon, MessageIcon, UserIcon } from '@/components/icons/icons';
import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <p className={styles.header}>theFriendBook</p>
            <div className={styles.icons}>
                <ActivityIcon title='Activity' size={20} />
                <MessageIcon title='Messages' size={20} />
                <UserIcon title='profile' size={20} />
                <LogOutIcon title='Logout' size={20} />
            </div>
        </div>
    )
}

export default Header;