import Header from '@/components/header/header';
import styles from './page-layout.module.scss'
import Sidebar from '@/components/sidebar/sidebar';

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.contentContainer}>
        <Sidebar />
        {children}
      </div>
    </div>
  )
}

export default PageLayout;