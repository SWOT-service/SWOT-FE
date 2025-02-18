import JustSwimSVG from '@assets/logo.svg';
import { JUST_SWIM, SNS, TEXT } from '@data';
import { Provider } from '@types';

import { SNSSignInButton } from './_components/button/snsSignIpButton';
import styles from './page.module.scss';

export interface SNSLoginButtonProps {
  sns: Provider;
}

export default function SignIn() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_logo}>
          <JustSwimSVG className={styles.logo} aria-label={JUST_SWIM} />
          <h3>{TEXT.SIGNUP_PAGE.welcome}</h3>
        </div>
        <div className={styles.header_info}>
          <p>
            {TEXT.SIGNUP_PAGE.notification.first} <br />
            {TEXT.SIGNUP_PAGE.notification.second}
          </p>
        </div>
      </div>

      <div className={styles.section}>
        {Object.values(SNS).map((sns) => {
          return <SNSSignInButton key={sns} sns={sns as Provider} />;
        })}
      </div>

      <div className={styles.footer}>
        <p className={styles.footer_info}>
          {TEXT.SIGNUP_PAGE.helper.first} <br /> {TEXT.SIGNUP_PAGE.helper.second}
        </p>
      </div>
    </>
  );
}
