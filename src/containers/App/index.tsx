import React from 'react';
import { Grid } from '@material-ui/core';

import styles from './styles.module.css';

import SoundList from '../../components/SoundList';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

function App() {
  return (
      <Grid container>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item xs={12} className={styles.container}>         
          <SoundList  />
        </Grid>
        <Grid item xs={12}>
          <AppFooter />
        </Grid>
      </Grid>
  );
}

export default App;
