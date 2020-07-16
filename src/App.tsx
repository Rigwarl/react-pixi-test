import React from 'react';
import { Stage, Sprite } from '@inlet/react-pixi'
import Camera from './Camera';

import bunnyPng from './bunny.png';

function App() {
  return (
    <div className="App">
      <Stage>
        <Camera>
          <Sprite image={bunnyPng} />
        </Camera>
      </Stage>
    </div>
  );
}

export default App;
