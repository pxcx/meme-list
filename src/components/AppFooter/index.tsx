import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import styles from './styles.module.css';

interface OwnProps {
  tab: Number;
  setTab: Function;
}

const AppFooter: React.FC<OwnProps> = ({tab, setTab}) => {
  return (
    <BottomNavigation
      value={tab}
      onChange={(event, newTab) => {
        setTab(newTab);
      }}
      showLabels
      className={styles.container}
    >
      <BottomNavigationAction label="Sound List" icon={<VolumeUpIcon />} />
      <BottomNavigationAction label="Add new Sound" icon={<AddCircleIcon />} />
    </BottomNavigation>
  );
}

export default AppFooter;