import { IPoint } from '../Point'
import { EmitterShape } from './EmitterShape'
import { randomRange } from '../utils'

export interface ICircle extends IPoint {
  radius: number
}

export class Circle extends EmitterShape implements ICircle {
  constructor(init: ICircle) {
    super()
    this.x = init.x
    this.y = init.y
    this.radius = init.radius
  }

  x: number

  y: number

  radius: number

  getPoint(): IPoint {
    // To find a point in a circle, we can use a distance from the center,
    // together with an angle, theta. However, we want to be a bit careful
    // when generating these points.

    // Points closer to the center are, of necessity, closer together,
    // so we want to bias our distance towards the outside of the circle.
    // It turns out the proper way to do this is via taking the sqrt of
    // a uniformly distributed number between 0 and 1, then multiplying by our radius.
    // See the linked stack overflow for details

    // https://stackoverflow.com/a/50746409/13689193

    // So, first, our distance from the center:
    const d = this.radius * Math.sqrt(randomRange(0, 1))

    // Then, a random angle from 0 to 2pi:
    const theta = randomRange(0, 2 * Math.PI)

    // And we'll convert to cartesian coordinates in the return.
    return {
      x: this.x + d * Math.cos(theta),
      y: this.y + d * Math.sin(theta),
    }
  }
}

export default Circle
