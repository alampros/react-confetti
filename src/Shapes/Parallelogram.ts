import { IPoint } from '../Point'
import { EmitterShape } from './EmitterShape'
import { randomRange } from '../utils'

// Assume our parallelogram is ABCD (i.e. A is between D and B, B between A and C, etc.).
// Then A, B, and C will determine D, therefore we only need these three points.
export class Parallelogram extends EmitterShape {
  position: IPoint

  side1: IPoint

  side2: IPoint

  constructor(position: IPoint, side1: IPoint, side2: IPoint) {
    super()
    this.position = position
    this.side1 = side1
    this.side2 = side2
  }

  getPoint(): IPoint {
    // For a parallelogram with points ABCD, s.t. AB, BC, CD, and DA are sides...
    // ...given random u, v, in [0, 1]...
    const u = randomRange(0, 1)
    const v = randomRange(0, 1)
    // ... p = B + (u * AB) + (v * CB) will be a random point inside.
    const x = this.position.x + u * this.side1.x + v * this.side2.x
    const y = this.position.y + u * this.side1.y + v * this.side2.y
    return { x, y }
  }
}
