import styles from './new-post.module.scss'

const NewPostComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topSection}>
                <div className={styles.iconSection}>
                    <div className={styles.profileIcon} />
                </div>
                <div className={styles.textSection}>
                    <textarea />
                </div>
            </div>
            <div className={styles.divider} />
            <div className={styles.bottomSection}></div>
        </div>
    )
}

export default NewPostComponent;