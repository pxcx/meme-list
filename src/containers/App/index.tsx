import React from 'react';
import { Container, Grid } from '@material-ui/core';

import styles from './styles.module.css';

import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';
import SoundAccordion from '../../components/SoundAccordion';
import AddSoundForm from '../../components/AddSoundForm';

function App() {
  const [tab, setTab] = React.useState(0);

  const memes = [
    'acerto.mp3',
    'ehtreta.mp3',
    'emorreu.mp3',
    'errou.mp3',
    'morrediabo.mp3',
    'soufoda.mp3',
    'trollei.mp3',
  ];

  const soundsTracks = [
    'triste.mp3',
    'feliz.mp3',
    'suspense.mp3'
  ];

  const sfx = [
    'grilo.mp3',
    'breaking.mp3',
    'explosao.mp3'
  ];

  return (
    <Container className={styles.app}>
      <Grid container>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item xs={12} className={styles.container}>
          {
            tab === 0 ? (
              <SoundAccordion 
                memes={memes}
                soundTracks={soundsTracks}
                sfx={sfx}
              />
            ): <AddSoundForm />
          }
        </Grid>
        <Grid item xs={12}>
          <AppFooter tab={tab} setTab={setTab} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
