import { IRect } from './Rect'
import ParticleGenerator from './ParticleGenerator'

export interface IConfettiOptions {
  width: number
  height: number
  numberOfPieces: number
  friction: number
  wind: number
  gravity: number
  colors: string[]
  opacity: number
  recycle: boolean
  run: boolean
  confettiSource: IRect
}

export const confettiDefaults: Pick<IConfettiOptions, Exclude<keyof IConfettiOptions, 'confettiSource'>> = {
  width: typeof window !== 'undefined' ? window.innerWidth : 300,
  height: typeof window !== 'undefined' ? window.innerHeight : 200,
  numberOfPieces: 200,
  friction: 0.99,
  wind: 0,
  gravity: 0.1,
  colors: [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722', '#795548',
  ],
  opacity: 1.0,
  recycle: true,
  run: true,
}

export default class Confetti {
  constructor(canvas: HTMLCanvasElement, opts: Partial<IConfettiOptions>) {
    this.canvas = canvas
    const ctx = this.canvas.getContext('2d')
    if(!ctx) {
      throw new Error('Could not get canvas context');
    }
    this.context = ctx
    const computedConfettiDefaults = {
      confettiSource: {
        x: 0,
        y: 0,
        w: canvas.width,
        h: 0,
      }
    }
    this.options = { ...computedConfettiDefaults, ...confettiDefaults, ...opts }
    console.log('creating new Confetti with opts:', this.options)
    this.generator = new ParticleGenerator(this.canvas, this.options)
    this.update()
  }
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D
  options: IConfettiOptions
  generator: ParticleGenerator

  update = () => {
    const {
      options: {
        run,
        numberOfPieces,
      },
      canvas,
      context,
    } = this
    if(run) {
      this.generator.options = this.options
      context.fillStyle = 'white'
      context.clearRect(0, 0, canvas.width, canvas.height)
    }
    if(this.generator.animate()) {
      requestAnimationFrame(this.update)
    } else {
      this.options.run = false
    }
  }

}
