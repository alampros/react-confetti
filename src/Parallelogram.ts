import { IPoint } from './Point'

// Assume our parallelogram is ABCD (i.e. A is between D and B, B between A and C, etc.).
// Then A, B, and C will determine D, therefore we only need these three points.
export interface IParallelogram {
  pointA: IPoint;
  pointB: IPoint;
  pointC: IPoint;
}
