import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import styles from './styles.module.css';

import AudioPlayer from '../AudioPlayer';


const SoundList: React.FC = () => {

  const audios = [
    'acerto.mp3',
    'ehtreta.mp3',
    'emorreu.mp3',
    'errou.mp3',
    'morrediabo.mp3',
    'soufoda.mp3',
    'trollei.mp3',
  ]

  return (
      <Container className={styles.container}>
      {
        audios.map((audio, index) => (
          <Grid key={index} container className={styles.soundItem}>
            <Grid item xs={5}>
              <Typography>{audio.replace('.mp3', '')}</Typography>
            </Grid>
            <Grid item xs={7}>         
              <AudioPlayer audioFile={audio} />
            </Grid>
          </Grid>
        ))
      }
      </Container>
  );
}
export default SoundList;
