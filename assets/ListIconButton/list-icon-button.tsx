import { IconType } from 'react-icons';
import styles from './list-icon-button.module.scss'
import { ReactElement } from 'react';

type ListIconButtonProps = {
    icon: ReactElement;
    title: string;
    onClick: () => void;
}

const ListIconButton = (props: ListIconButtonProps) => {
    const { icon: Icon, title, onClick } = props;

    return (
        <button
            className={styles.listItemContainer}
            onClick={onClick}
        >
            {Icon}
            <span>{title}</span>
        </button>
    )
}

export default ListIconButton;