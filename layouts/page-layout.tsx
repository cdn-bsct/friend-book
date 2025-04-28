import styles from './page-layout.module.scss'

const PageLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
  }

  export default PageLayout;