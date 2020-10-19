import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './styles.module.css';

import SoundList from '../../components/SoundList';
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

function App() {
  const [expanded, setExpanded] = React.useState('meme');

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>, 
    isExpanded : boolean
  ) => {
    setExpanded(isExpanded ? panel : '');
  };

  return (
    <Container className={styles.app}>
      <Grid container>
        <Grid item xs={12}>
          <AppHeader />
        </Grid>
        <Grid item xs={12} className={styles.container}>
          <Accordion expanded={expanded==='meme'} onChange={handleChange('meme')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" className={styles.title}>Memes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SoundList />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded==='trks'} onChange={handleChange('trks')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" className={styles.title}>Sound tracks</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SoundList />
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded==='sfx'} onChange={handleChange('sfx')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" className={styles.title}>Sound effects</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SoundList />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={12}>
          <AppFooter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
