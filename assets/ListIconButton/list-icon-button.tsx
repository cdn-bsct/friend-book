import { IconType } from 'react-icons';
import styles from './list-icon-button.module.scss'

type ListIconButtonProps = {
    icon: IconType;
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
            <Icon size={18} />
            <span>{title}</span>
        </button>
    )
}

export default ListIconButton;