import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ButtonToolbar, Button } from 'react-bootstrap';
// Import Style
import styles from './Footer.css';
import { withBaseIcon } from 'react-icons-kit';
import { facebook, twitter, instagram } from 'react-icons-kit/fa';

const IconGreen32 =
        withBaseIcon({ size: 32, style: { color: '#4caf50' } });

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
      Let's keep the conversation going
         <Button bsStyle="link" href="https://www.facebook.com/investnaira" target="_blank"><IconGreen32 icon={facebook} /></Button>
         <Button bsStyle="link" href="https://www.instagram.com/investnaira" target="_blank"><IconGreen32 icon={instagram} /></Button>
         <Button bsStyle="link" href="https://www.twitter.com/investnaira" target="_blank"><IconGreen32 icon={twitter} /></Button>
    </p>

    </div>
  );
}

export default Footer;
