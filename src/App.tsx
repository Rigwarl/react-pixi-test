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
          <Sprite image={bunnyPng} x={200} />
        </Camera>
      </Stage>
    </div>
  );
}

export default App;
