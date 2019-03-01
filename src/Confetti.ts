export interface IConfettiOptions {
  width?: number
  height?: number
  numberOfPieces?: number
  friction?: number
  wind?: number
  gravity?: number
  colors?: string[]
  opacity?: number
  recycle?: boolean
  run?: boolean
  confettiSource?: {
    x: number
    y: number
    w: number
    h: number
  }
}

export const confettiDefaults: IConfettiOptions = {
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
  constructor(canvas: HTMLCanvasElement, opts: IConfettiOptions) {
    this.canvas = canvas
    this.options = { ...confettiDefaults, ...opts }
    console.log('creating new Confetti with opts:', this.options)
  }
  canvas: HTMLCanvasElement
  options: IConfettiOptions
}
