import React from 'react';
import { Stage } from '@inlet/react-pixi'
import Camera from './Camera';

import { ConfigRenderer } from './config/config.component';
import { config } from './config/config.model';

function App() {
  return (
    <div className="App">
      <Stage>
        <Camera>
          <ConfigRenderer config={config} />
        </Camera>
      </Stage>
    </div>
  );
}

export default App;
