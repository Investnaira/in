import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { Nav, NavDropdown, Navbar, NavItem, MenuItem } from 'react-bootstrap';
// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const languageNodes = props.intl.enabledLanguages.map(
    lang => <li key={lang} onClick={() => props.switchLanguage(lang)} className={lang === props.intl.locale ? styles.selected : ''}>{lang}</li>
  );

  return (
    <div className={styles.header}>
      <Navbar default fixedTop fluid collapseOnSelect>
 <Navbar.Header>
   <Navbar.Brand>
     <a href="http://www.Investnaira.com" style={{fontSize: '42px', color: '#4caf50' }} >IN</a>
   </Navbar.Brand>
   <Navbar.Toggle />
 </Navbar.Header>
        <Navbar.Collapse>

          <Nav pullRight>
      {/* <NavItem><a href="http://www.Investnaira.com">Continue</a></NavItem> */}
     <NavItem><Link to={'/home'} style={{ color: '#4caf50' }}>Home</Link></NavItem>
     <NavItem><Link to={'/post'} style={{ color: '#4caf50' }}>Blog</Link></NavItem>
     <NavItem ><Link to={'/forum'} style={{ color: '#4caf50' }}>Forum</Link></NavItem>
     <NavItem><Link to={'/dashboard'} style={{ color: '#4caf50' }}>Dashboard</Link></NavItem>
     <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown" style={{ color: '#4caf50' }}>
       <MenuItem eventKey={3.1}>Log In</MenuItem>
       <MenuItem eventKey={3.2}>Sign Up</MenuItem>
       {/* <MenuItem eventKey={3.3}>Something else here</MenuItem>
       <MenuItem divider />
       <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
     </NavDropdown>

   </Nav>
 </Navbar.Collapse>
</Navbar>
      {/* <div className={styles['language-switcher']}>
        <ul>
          <h1>IN</h1>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/post'}>Blog</Link></li>
          <li><Link to={'/forum'}>Forum</Link></li>
          <li><Link to={'/dashboard'}>Dashboard</Link></li>
          <li><Link to={'/dashboard'}>Register</Link></li>
          <li><Link to={'/dashboard'}>Sign In</Link></li>
          {/* <li><FormattedMessage id="switchLanguage" /></li>
          {languageNodes} */}
        {/* </ul>
      </div> */}
      {/* <div className={styles.content}>

        <h1 className={styles['site-title']}>
          <Link to="/" >INVESTNAIRA</Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div> */}
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

export default Header;
