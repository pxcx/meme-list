import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import styles from './styles.module.css';

const AppFooter: React.FC = () => {
  const [tab, setTab] = React.useState(0);

  return (
    <BottomNavigation
      value={tab}
      onChange={(event, newTab) => {
        setTab(newTab);
      }}
      showLabels
      className={styles.container}
    >
      <BottomNavigationAction label="Meme List" icon={<VolumeUpIcon />} />
      <BottomNavigationAction label="Add new" icon={<AddCircleIcon />} />
    </BottomNavigation>
  );
}

export default AppFooter;