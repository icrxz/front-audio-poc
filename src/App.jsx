import React, { useState } from 'react';
import './App.css';

import AudioRecorder from './components/AudioRecorder';


const App = () => {
  return (
    <div>
      <h1>React Media Recorder</h1>
      <div>
        <AudioRecorder />
      </div>
    </div>
  );
};

export default App;
