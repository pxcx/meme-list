import React from 'react';

interface OwnProps {
  audioFile: string;
}

const AudioPlayer: React.FC<OwnProps> = ({ audioFile }) => {
  return (
    <div>
      <audio src={`audios/${audioFile}`} controls autoPlay />
    </div>
  );
}


export default AudioPlayer;
