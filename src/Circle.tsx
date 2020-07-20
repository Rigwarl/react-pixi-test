import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

interface CircleProps {
  x: number;
  y: number;
}

const Circle = ({ x, y }: CircleProps) => {
  const draw = useCallback(g => {
    g.beginFill(0xfff)
    g.drawCircle(0, 0, 2)
    g.endFill()
  }, [])

  return (
    <Graphics draw={draw} x={x} y={y} />
  );
}

export default Circle;