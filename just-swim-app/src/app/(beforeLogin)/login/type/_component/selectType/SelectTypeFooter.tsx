import styles from './SelectType.module.css';
import Link from 'next/link';

export default function SelectTypeFooter({ type }: { type: string }) {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.buttonWrapper}>
          <Link
            href={{
              pathname: `/login/start`,
              query: { type: `${type}` },
            }}>
            <button
              className={`${styles.SelectButton} ${type ? styles.isActive : styles.isNotActive}`}>
              선택
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
