import React from 'react';
import { Stage, Sprite } from '@inlet/react-pixi'
import Camera from './Camera';
import Circle from './Circle';

import bunnyPng from './bunny.png';

function App() {
  return (
    <div className="App">
      <Stage>
        <Camera>
          {Array.from({ length: 10000 }, (_, i) => <Circle x={i * 5} y={i * 5} />)}
          <Sprite image={bunnyPng} />
          <Sprite image={bunnyPng} x={200} />
        </Camera>
      </Stage>
    </div>
  );
}

export default App;
