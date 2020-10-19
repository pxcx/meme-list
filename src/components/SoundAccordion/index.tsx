import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import styles from './styles.module.css';

import SoundList from '../../components/SoundList';

interface OwnProps {
  memes: string[];
  soundTracks: string[];
  sfx: string[];
}

const SoundAccordion: React.FC<OwnProps> = ({memes, soundTracks, sfx}) => {
  const [expanded, setExpanded] = React.useState('meme');

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>, 
    isExpanded : boolean
  ) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <React.Fragment>
      <Accordion expanded={expanded==='meme'} onChange={handleChange('meme')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" className={styles.title}>
            <NewReleasesIcon />Memes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SoundList audios={memes} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='trks'} onChange={handleChange('trks')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" className={styles.title}>
            <MusicNoteIcon />Sound tracks
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SoundList audios={soundTracks} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded==='sfx'} onChange={handleChange('sfx')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" className={styles.title}>
            <FlashOnIcon />Sound effects
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SoundList audios={sfx} />
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}

export default SoundAccordion;