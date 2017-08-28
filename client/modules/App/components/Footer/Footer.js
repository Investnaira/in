import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from './LOGO2.png';

export function Footer() {
  return (
    <div style={{ background: '#4CAF50  center' }} className={styles.footer}>
      <p>&copy; 2017 &middot; INVESTNAIRA &middot; </p>
      <p>
    {/* <FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a> */}
      Follow us on Facebook, Twitter and Instagram.
      </p>
    </div>
  );
}

export default Footer;
