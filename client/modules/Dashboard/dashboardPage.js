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
        <Sidebar.Menu header="My dashboard" key="1">
    <Sidebar.Menu.Item title="Home" href="/" />
    <Sidebar.Menu.Item title="Save Smartly" href="/">
    <Sidebar.Menu.Item title="Reads" href="/" />
    <Sidebar.Menu.Item title="Videos" href="/" />
    <Sidebar.Menu.Item title="Podcasts" href="/" />
  </Sidebar.Menu.Item>
    <Sidebar.Menu.Item title="Invest Wisely" href="/" >
    <Sidebar.Menu.Item title="Bonds" href="/" />
    <Sidebar.Menu.Item title="Stocks" href="/" />
    <Sidebar.Menu.Item title="Real Estate" href="/" />
    <Sidebar.Menu.Item title="Forex" href="/" />
    <Sidebar.Menu.Item title="Mutual Funds" href="/" />
    </Sidebar.Menu.Item>
      <Sidebar.Menu.Item title="Compound Wealth" href="/" >
    <Sidebar.Menu.Item title="Talk to a PFA" href="/" />
    </Sidebar.Menu.Item>
  </Sidebar.Menu>,
      ]);

      App = ({ children }) => (
  <Dashboard
    navbarChildren={nav()}
    sidebarChildren={sb()}
    theme="skin-green"
    logoLg={<span><b>InvestNaira</b></span>}
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
