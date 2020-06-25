import { EmitterShape } from './EmitterShape'
import { IPoint } from './Point'
import { randomRange } from './utils'

// Kept for backwards compatability
export interface IRect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export function isIRect(shape: EmitterShape | IRect): shape is IRect {
  return !('getPoint' in shape)
}

// EmitterShape version
export class Rect extends EmitterShape {
  position: IPoint

  width: number

  height: number

  constructor(position: IPoint, width: number, height: number) {
    super()
    this.position = position
    this.width = width
    this.height = height
  }

  static fromIRect({ x, y, w, h }: IRect): Rect {
    return new Rect({ x, y }, w, h)
  }

  getPoint(): IPoint {
    const x = randomRange(this.position.x, this.width + this.position.x)
    const y = randomRange(this.position.y, this.height + this.position.y)
    return { x, y }
  }
}
