import React, { PropTypes } from 'react';
import styles from './dashboard.css';
// const isBrowser = typeof window !== 'undefined';
// const dashComponent = isBrowser ? require('react-adminlte-dash') : undefined;
// const isDashImported = typeof dashComponent !== 'undefined';
// let Dashboard = {}
// let Header = {};
// let Sidebar = {};
// const dashAvailable = isDashImported ? { Dashboard, Header, Sidebar } = dashComponent : false;


var App;

export default class dashboardPage extends React.Component {

  componentDidMount() {

  }

  render() {
    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      const MyWindowDependentLibrary = require('react-adminlte-dash');
      const { Dashboard, Header, Sidebar } = MyWindowDependentLibrary;

      const nav = () => ([
        <Header.Item href="/some/link" key="1" />,
      ]);

      const sb = () => ([
        <Sidebar.Menu header="NAVIGATION" key="1">
    <Sidebar.Menu.Item title="Home" href="/" />
  </Sidebar.Menu>,
      ]);

      App = ({ children }) => (
  <Dashboard
    navbarChildren={nav()}
    sidebarChildren={sb()}
    theme="skin-blue"
  >
      {children}
    </Dashboard>
  );
}
    else {
      console.log('no window');
       App = () => (
    <div>Not working</div>);
    }
    return (
       <App className={styles.app} />
    //  <div> This</div>
    );
  }
}
