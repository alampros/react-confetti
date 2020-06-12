import { IParallelogram } from './Parallelogram'

export interface IRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function isRect(shape: IParallelogram | IRect): shape is IRect {
  return 'x' in shape
}
