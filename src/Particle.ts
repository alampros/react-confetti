import { IRect } from './Rect'
import { randomRange, randomInt, degreesToRads } from './utils';
import { IConfettiOptions } from './confetti';

export enum ParticleShape {
  Cirlce = 0,
  Square,
  Spiral,
}

export default class Particle {
  constructor(context: CanvasRenderingContext2D, options: IConfettiOptions, x: number, y: number) {
    this.context = context
    this.options = options
    this.x = x
    this.y = y
    this.w = randomRange(5, 20)
    this.h = randomRange(5, 20)
    this.radius = randomRange(5, 10)
    this.vx = randomRange(-4, 4)
    this.vy = randomRange(-10, -0)
    this.shape = randomInt(0, 2)
    this.angle = degreesToRads(randomRange(0, 360))
    this.angularSpin = randomRange(-0.2, 0.2)
    this.color = options.colors[Math.floor(Math.random() * options.colors.length)]
    this.rotateY = randomRange(0, 1)
  }
  context: CanvasRenderingContext2D
  options: IConfettiOptions
  radius: number
  x: number
  y: number
  w: number
  h: number
  vx: number
  vy: number
  shape: ParticleShape
  angle: number
  angularSpin: number
  color: string
  rotateY: number

  update() {
    const {
      gravity,
      wind,
      friction,
      opacity,
    } = this.options
    this.x += this.vx
    this.y += this.vy
    this.vy += gravity
    this.vx += wind
    this.vx *= friction
    this.vy *= friction
    if(this.rotateY < 1) {
      this.rotateY += 0.1
    } else {
      this.rotateY = -1
    }
    this.angle += this.angularSpin
    this.context.save()
    this.context.translate(this.x, this.y)
    this.context.rotate(this.angle)
    this.context.scale(1, this.rotateY)
    this.context.rotate(this.angle)
    this.context.beginPath()
    this.context.fillStyle = this.color
    this.context.strokeStyle = this.color
    this.context.globalAlpha = opacity
    this.context.lineCap = 'round'
    this.context.lineWidth = 2
    switch(this.shape) {
      case ParticleShape.Cirlce: {
        this.context.beginPath()
        this.context.arc(0, 0, this.radius, 0, 2 * Math.PI)
        this.context.fill()
        break
      }
      case ParticleShape.Square: {
        this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h)
        break
      }
      case ParticleShape.Spiral: {
        this.context.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.35 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          this.context.lineTo(x, y)
        }
        this.context.stroke()
        break
      }
    }
    this.context.closePath()
    this.context.restore()
  }
}
