'use client'
import IconButton from '@/assets/IconButton/icon-button';
import { MessageIcon, StatusIcon } from '../icons/icons';
import styles from './friends-list.module.scss'
import { StatusColours, StatusTypes } from '@/utils/status-util';

const FriendsListComponent = () => {
    const mockData = [
        {
            id: '01',
            imageUrl: 'http://example.com',
            name: 'John Smith',
            status: 'ONLINE',
        },
        {
            id: '02',
            imageUrl: 'http://example.com',
            name: 'Jane Doe',
            status: 'AWAY',
        },
        {
            id: '03',
            imageUrl: 'http://example.com',
            name: 'Jim Halpert',
            status: 'OFFLINE',
        },
    ]

    const checkStatus = (status: string) => {
        if (status === StatusTypes.online) {
            return StatusColours.statusGreen;
        } else if (status === StatusTypes.away) {
            return StatusColours.statusAway
        } else {
            return StatusColours.statusOffline
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <span className={styles.header}>Friends</span>
                <div className={styles.divider} />
            </div>
            {mockData.map(friend => (
                <div className={styles.listItem}>
                    <div className={styles.nameAndStatus}>
                        <span>{friend.name}</span>
                        <StatusIcon size={32} color={checkStatus(friend.status)} />
                    </div>
                    <IconButton icon={<MessageIcon size={18} />} onClick={() => alert('message trigger')} />
                </div>
            ))}
        </div>
    )
}

export default FriendsListComponent;