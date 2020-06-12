import { IConfettiOptions } from './Confetti'
import { IParallelogram } from './Parallelogram'
import { isRect, IRect } from './Rect'
import Particle from './Particle'
import { randomRange } from './utils'

export interface IParticleGenerator {
  removeParticleAt: (index: number) => void
  getParticle: () => void
  animate: () => boolean
  shape: IRect | IParallelogram
  particles: Particle[]
  particlesGenerated: number
}

export default class ParticleGenerator implements IParticleGenerator {
  constructor(canvas: HTMLCanvasElement, getOptions: () => IConfettiOptions) {
    this.canvas = canvas
    const ctx = this.canvas.getContext('2d')
    if(!ctx) {
      throw new Error('Could not get canvas context')
    }
    this.context = ctx
    this.getOptions = getOptions
  }

  canvas: HTMLCanvasElement

  context: CanvasRenderingContext2D

  getOptions: () => IConfettiOptions

  shape: IRect | IParallelogram = { x: 0, y: 0, w: 0, h: 0 }

  lastNumberOfPieces: number = 0

  tweenInitTime: number = Date.now()

  particles: Particle[] = []

  particlesGenerated: number = 0

  removeParticleAt = (i: number) => {
    this.particles.splice(i, 1)
  }

  getParticle = () => {
    if(isRect(this.shape)) {
      const { x, y, w, h } = this.shape
      const newParticleX = randomRange(x, w + x)
      const newParticleY = randomRange(y, h + y)
      return new Particle(this.context, this.getOptions, newParticleX, newParticleY)
    }
    const { pointA: A, pointB: B, pointC: C } = this.shape
    // For a parallelogram with points ABCD, s.t. AB, BC, CD, and DA are sides...
    // ...given random u, v, in [0, 1]...
    const u = randomRange(0, 1)
    const v = randomRange(0, 1)
    // ... p = B + (u * AB) + (v * CB) will be a random point inside.
    // Alternatively: p = B + (u * (A - B)) + (v * (C - B))
    const newParticleX = B.x + u * (A.x - B.x) + v * (C.x - B.x)
    const newParticleY = B.y + u * (A.y - B.y) + v * (C.y - B.y)
    return new Particle(
      this.context,
      this.getOptions,
      newParticleX,
      newParticleY
    )
  }

  animate = (): boolean => {
    const {
      canvas,
      context,
      particlesGenerated,
      lastNumberOfPieces,
    } = this
    const {
      run,
      recycle,
      numberOfPieces,
      debug,
      tweenFunction,
      tweenDuration,
    } = this.getOptions()
    if(!run) {
      return false
    }

    const nP = this.particles.length
    const activeCount = recycle ? nP : particlesGenerated

    const now = Date.now()

    // Initial population
    if(activeCount < numberOfPieces) {
      // Use the numberOfPieces prop as a key to reset the easing timing
      if(lastNumberOfPieces !== numberOfPieces) {
        this.tweenInitTime = now
        this.lastNumberOfPieces = numberOfPieces
      }
      const { tweenInitTime } = this
      // Add more than one piece per loop, otherwise the number of pieces would
      // be limitted by the RAF framerate
      const progressTime = now - tweenInitTime > tweenDuration
        ? tweenDuration
        : Math.max(0, now - tweenInitTime)
      const tweenedVal = tweenFunction(progressTime, activeCount, numberOfPieces, tweenDuration)
      const numToAdd = Math.round(tweenedVal - activeCount)
      for(let i = 0; i < numToAdd; i++) {
        this.particles.push(this.getParticle())
      }
      this.particlesGenerated += numToAdd
    }
    if(debug) {
      // Draw debug text
      context.font = '12px sans-serif'
      context.fillStyle = '#333'
      context.textAlign = 'right'
      context.fillText(`Particles: ${nP}`, canvas.width - 10, canvas.height - 20)
    }

    // Maintain the population
    this.particles.forEach((p, i) => {
      // Update each particle's position
      p.update()
      // Prune the off-canvas particles
      if(p.y > canvas.height || p.y < -100 || p.x > canvas.width + 100 || p.x < -100) {
        if(recycle && activeCount <= numberOfPieces) {
          // Replace the particle with a brand new one
          this.particles[i] = this.getParticle()
        } else {
          this.removeParticleAt(i)
        }
      }
    })
    return nP > 0 || activeCount < numberOfPieces
  }
}
