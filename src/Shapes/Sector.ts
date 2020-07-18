import { IPoint } from '../Point'
import { EmitterShape } from './EmitterShape'
import { randomRange } from '../utils'

// We're going to be using 2*pi a lot, so I'll just define it here
// under a common name for it, tau
const tau = 2 * Math.PI

// A sector is a 'pie slice' of a circle. In this case,
// Sector(position, radius, angle1, angle2) is the
// pie slice from angle1 to angle2 (in radians) of the circle
// centered at position with the given radius.
export class Sector extends EmitterShape {
  position: IPoint

  radius: number

  angle1: number

  angle2: number

  constructor(position: IPoint, radius: number, angle1: number, angle2: number) {
    super()
    this.position = position
    this.radius = radius
    const smallerAngle = Math.min(angle1, angle2)
    const largerAngle = Math.max(angle1, angle2)
    // If the two angles are more than tau apart,
    // we're covering the whole circle, so we'll just
    // set angle1 to 0 and angle2 to tau
    if(largerAngle - smallerAngle > tau) {
      this.angle1 = 0
      this.angle2 = tau
    // If not, we're covering a proper sector of the circle, from the smaller to the larger.
    } else {
      this.angle1 = smallerAngle
      this.angle2 = largerAngle
    }
  }

  getPoint(): IPoint {
    // To find a point in a sector, we can use a distance from the center,
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

    // Then, a random angle from angle1 to angle2:
    const theta = randomRange(this.angle1, this.angle2)

    // And we'll convert to cartesian coordinates in the return.
    return {
      x: this.position.x + d * Math.cos(theta),
      y: this.position.y + d * Math.sin(theta),
    }
  }
}
