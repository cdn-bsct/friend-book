'use client'
import { EditIcon } from '@/components/icons/icons';
import styles from './post-component.module.scss'

const PostComponent = () => {
    return (
        <button className={styles.container} onClick={() => alert('activate post module')}>
            <div className={styles.innerButton}>
                <EditIcon size={24} />
                <span>Make a post...</span>
            </div>
        </button>
    )
}

export default PostComponent;