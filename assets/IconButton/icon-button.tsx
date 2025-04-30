import { ReactElement } from 'react'
import styles from './icon-button.module.scss'

type IconButtonProps = {
    icon: ReactElement,
    title?: string,
    iconPosition?: 'start' | 'end' | undefined,
    onClick: () => void;
}

const IconButton = (props: IconButtonProps) => {
    const { icon: Icon, title, iconPosition, onClick } = props;

    return (
        <div>
            {iconPosition && title ? (
                iconPosition === "end" ? (
                    <div className={styles.container}>
                        <span>{title}</span>
                        <button onClick={onClick}>{Icon}</button>
                    </div>
                ) : (
                    <div className={styles.container}>
                        <button onClick={onClick}>{Icon}</button>
                        <span>{title}</span>
                    </div>
                )
            ) : (
                <div className={styles.container}>
                    <button onClick={onClick}>{Icon}</button>
                </div>
            )}
        </div>
    )
}

export default IconButton;