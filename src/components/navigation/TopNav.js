import React from 'react';
import styles from '../../assets/css/TopNav.css';
import AppConfig from '../../config/AppConfig';

const TopNav = () => {
    return (
      <div style={styles} className="toolbar">
        <div className="toolbar-item">left</div>
        <div className="toolbar-item grid-3">{AppConfig.APP_NAME}</div>
        <div className="toolbar-item grid-5">right</div>
      </div>
    );
};

export default TopNav;