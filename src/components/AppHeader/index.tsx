import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import styles from './styles.module.css';

const AppHeader: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <VolumeUpIcon className={styles.titleIcon} />
        <Typography variant="h6" className={styles.title}>
          Paulo's MemeBot
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;