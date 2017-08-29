import React from 'react';
import { FormattedMessage } from 'react-intl';
// Import Style
import styles from './Footer.css';

// Import Images
// import bg from './LOGO2.png';

const FontAwesome = require('react-fontawesome'); 
export function Footer() {
  return (
    <div style={{ background: '#fff  center' }} className={styles.footer}>
      <p>&copy; 2017 &middot; INVESTNAIRA &middot; </p>
      <FontAwesome name='rocket' />
      <p>
    {/* <FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a> */}
      Follow us on Facebook  <FontAwesome
        className='super-crazy-colors'
        name='rocket'
        size="2x"
        spin
        style={{ color: '#4caf50' }}
      />, Twitter and Instagram.

      </p>
    </div>
  );
}

export default Footer;
