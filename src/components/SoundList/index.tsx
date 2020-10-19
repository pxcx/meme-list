import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import styles from './styles.module.css';

import AudioPlayer from '../AudioPlayer';

interface OwnProps {
  audios: string[];
}

const SoundList: React.FC<OwnProps> = ({audios}) => {
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
