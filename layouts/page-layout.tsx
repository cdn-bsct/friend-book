import Header from '@/components/header/header';
import styles from './page-layout.module.scss'
import Sidebar from '@/components/sidebar/sidebar';
import NewPostComponent from '@/components/new-post/new-post';

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
        <div className={styles.mainSection}>
          <NewPostComponent />
          {children}
        </div>
      </div>
    </div>
  )
}

export default PageLayout;