import React from 'react';
import styles from './styles.module.css';

interface OwnProps {
  audioFile: string;
}

const AudioPlayer: React.FC<OwnProps> = ({ audioFile }) => {
  return (
      <audio 
        className={styles.player}
        id={audioFile}
        src={`audios/${audioFile}`}
        controls
        preload="auto">
      </audio>
  );
}


export default AudioPlayer;
