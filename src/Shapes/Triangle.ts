import { IPoint } from '../Point'
import { EmitterShape } from './EmitterShape'
import { randomRange } from '../utils'

export class Triangle extends EmitterShape {
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
    // Triangles are half a parallelogram, so we can use a modified version of that algorithm.
    // For a triangle with points ABC...
    // ...select random u, v, in [0, 1].
    let u = randomRange(0, 1)
    let v = randomRange(0, 1)
    // If u + v > 1, the point generated via the parallelogram algorithm would be in the
    // mirror image of our triangle, but by replacing u and v as below, we get the
    // matching point in our triangle.
    if(u + v > 1) {
      u = 1 - u
      v = 1 - v
    }
    // Now we can be sure that p = B + (u * AB) + (v * CB) will be a
    // random point inside our triangle.
    const x = this.position.x + u * this.side1.x + v * this.side2.x
    const y = this.position.y + u * this.side1.y + v * this.side2.y
    return { x, y }
  }
}
