import React from 'react';
import { Container, Sprite } from '@inlet/react-pixi';
import { AppConfig, Item } from './config.model';

interface ConfigRendererProps {
  config: AppConfig;
}

const renderConfigItem = (item: Item) => {
  if (item.type === 'simple') {
    return (
      <Sprite
        image={item.image}
        key={item.id}
        x={item.x || 0}
        y={item.y || 0}
      />
    );
  }

  return (
    <Container key={item.id} x={item.x || 0} y={item.y || 0}>
      {item.parts.map(renderConfigItem)}
    </Container>
  );
};

export const ConfigRenderer = ({ config }: ConfigRendererProps) => (
  <Container>
    {config.parts.map(renderConfigItem)}
  </Container>
);