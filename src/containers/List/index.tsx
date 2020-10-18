import React from 'react';

import AudioPlayer from '../../components/AudioPlayer';


const List: React.FC = () => {

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
    <ul>
      {
        audios.map(audio => (
          <li>
            <h3>{audio}</h3>
            <AudioPlayer audioFile={audio} />
          </li>
        ))
      }
    </ul>
  );
}
export default List;
