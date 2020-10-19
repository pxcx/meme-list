import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import styles from './styles.module.css';

const AppHeader: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          <VolumeUpIcon className={styles.titleIcon} />Paulo's Sound List
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;