import bunnyPng from './bunny.png';

export interface AbstractItem {
  type: 'simple' | 'complex';
  id: string;
  x?: number;
  y?: number;
}

export interface SimpleItem extends AbstractItem {
  type: 'simple';
  image: string;
}

export interface ComplexItem extends AbstractItem {
  type: 'complex';
  parts: Item[];
}

export type Item = SimpleItem | ComplexItem;

export type AppConfig = Omit<ComplexItem, 'type' | keyof AbstractItem>;

const createUnsafeRandomId = () => Math.random().toString();

export const config: AppConfig = {
  parts: [
    {
      id: createUnsafeRandomId(),
      type: 'simple',
      image: bunnyPng,
    },
    {
      type: 'complex',
      id: createUnsafeRandomId(),
      x: 250,
      parts: [
        {
          id: createUnsafeRandomId(),
          type: 'simple',
          x: 100,
          image: bunnyPng,
        },
        {
          id: createUnsafeRandomId(),
          type: 'simple',
          x: 200,
          image: bunnyPng,
        },
      ],
    },
  ],
};
