import { IConfettiOptions } from './Confetti'
import { IRect } from './Rect'
import Particle from './Particle'
import { randomRange } from './utils'

export interface IParticleGenerator extends IRect {
  removeParticleAt: (index: number) => void
  getParticle: () => void
  animate: () => boolean
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
  x: number = 0
  y: number = 0
  w: number = 0
  h: number = 0
  particles: Particle[] = []
  particlesGenerated: number = 0

  removeParticleAt = (i: number) => {
    this.particles.splice(i, 1)
  }

  getParticle = () => {
    const newParticleX = randomRange(this.x, this.w + this.x)
    const newParticleY = randomRange(this.y, this.h + this.y)
    return new Particle(this.context, this.getOptions, newParticleX, newParticleY)
  }

  animate = (): boolean => {
    const {
      canvas,
      context,
      particlesGenerated,
    } = this
    const {
      run,
      recycle,
      numberOfPieces,
      debug,
    } = this.getOptions()
    if(!run) {
      return false
    }

    const nP = this.particles.length
    const limit = recycle ? nP : particlesGenerated

    // Initial population
    if(limit < numberOfPieces) {
      // Add more than one piece per loop, otherwise the number of pieces would
      // be limitted by the RAF framerate
      const numToAdd = Math.ceil((numberOfPieces - limit) / 20)
      for(let i = 0; i < numToAdd; i++) {
        this.particles.push(this.getParticle())
      }
      this.particlesGenerated += numToAdd
    }
    if(debug) {
      // Draw debug text
      context.font = '12px serif'
      context.fillStyle = '#333'
      context.fillText(`Particles: ${nP}`, 20, 20)
    }

    // Maintain the population
    this.particles.forEach((p, i) => {
      // Update each particle's position
      p.update()
      // Prune the off-canvas particles
      if(p.y > canvas.height || p.y < -100 || p.x > canvas.width + 100 || p.x < -100) {
        if(recycle && limit <= numberOfPieces) {
          // Replace the particle with a brand new one
          this.particles[i] = this.getParticle()
        } else {
          this.removeParticleAt(i)
        }
      }
    })
    return nP > 0 || limit < numberOfPieces
  }
}
