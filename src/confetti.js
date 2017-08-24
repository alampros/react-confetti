import * as utils from './utils'

/**
 * Most of this was coppied directly from the pen at http://codepen.io/Gthibaud/pen/BoaBZK
 * and halfheartedly converted to es6.
 */
function confetti(canvasObj) {
  let numberOfPieces = 200
  let friction = 0.99
  let wind = 0
  let gravity = 0.1
  let colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
    '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
    '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
    '#FF5722', '#795548',
  ]
  let opacity = 1.0
  let recycle = true

  function self() {
    const canvas = canvasObj
    const context = canvas.getContext('2d')

    function Particle(x, y) {
      this.radius = utils.randomRange(0.1, 1)
      this.x = x
      this.y = y
      this.vx = utils.randomRange(-4, 4)
      this.vy = utils.randomRange(-10, -0)
      this.type = utils.randomInt(0, 1)

      this.w = utils.randomRange(5, 20)
      this.h = utils.randomRange(5, 20)

      this.r = utils.randomRange(5, 10)

      this.angle = utils.degreesToRads(utils.randomRange(0, 360))
      this.anglespin = utils.randomRange(-0.2, 0.2)
      this.color = colors[Math.floor(Math.random() * colors.length)]

      this.rotateY = utils.randomRange(0, 1)
    }

    Particle.prototype.update = function updateParticle() {
      this.x += this.vx
      this.y += this.vy
      this.vy += gravity
      this.vx += wind
      this.vx *= friction
      this.vy *= friction
      this.radius -= 0.02
      if(this.rotateY < 1) {
        this.rotateY += 0.1
      } else {
        this.rotateY = -1
      }
      this.angle += this.anglespin
      context.save()
      context.translate(this.x, this.y)
      context.rotate(this.angle)
      context.scale(1, this.rotateY)
      context.rotate(this.angle)
      context.beginPath()
      context.fillStyle = this.color
      context.strokeStyle = this.color
      context.globalAlpha = opacity
      context.lineCap = 'round'
      context.lineWidth = 2
      if(this.type === 0) {
        context.beginPath()
        context.arc(0, 0, this.r, 0, 2 * Math.PI)
        context.fill()
      } else if(this.type === 2) {
        context.beginPath()
        for(let i = 0; i < 22; i++) {
          const angle = 0.5 * i
          const x = (0.2 + (1.5 * angle)) * Math.cos(angle)
          const y = (0.2 + (1.5 * angle)) * Math.sin(angle)
          context.lineTo(x, y)
        }
        context.stroke()
      } else if(this.type === 1) {
        context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h)
      }
      context.closePath()
      context.restore()
    }

    function ParticleGenerator(x, y, w, h, number, text) {
      // particle will spawn in this aera
      this.x = x
      this.y = y
      this.w = w
      this.h = h
      this.number = number
      this.particles = []
      this.text = text
      this.recycle = recycle
      this.type = 1
    }
    ParticleGenerator.prototype.animate = function animateParticle() {
      if(this.particles.length < this.number) {
        const newParticleX = utils.clamp(
          utils.randomRange(this.x, canvas.width + this.x),
          this.x, canvas.width + this.x)
        const newParticleY = utils.clamp(
          utils.randomRange(this.y, this.h + this.y),
          this.y, this.h + this.y)
        this.particles.push(new Particle(newParticleX, newParticleY, this.text))
      }

      if(this.particles.length > this.number) {
        this.particles.length = this.number
      }

      for(let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i]
        p.update()
        if((p.y > canvas.height || p.y < -100 || p.x > canvas.width + 100 || p.x < -100) && this.recycle) {
          // a brand new particle replacing the dead one
          const newParticleX = utils.clamp(
            utils.randomRange(this.x, canvas.width + this.x),
            this.x, canvas.width + this.x)
          const newParticleY = utils.clamp(
            utils.randomRange(this.y, this.h + this.y),
            this.y, this.h + this.y)
          this.particles[i] = new Particle(newParticleX, newParticleY, this.text)
        }
      }
    }

    const generator1 = new ParticleGenerator(0, 0, canvas.width, 0, numberOfPieces)

    function toggleEngine() {
      if(generator1.type === 0) {
        generator1.type = 1
        generator1.x = canvas.width / 2
        generator1.y = canvas.height / 2
        generator1.w = 0
      } else {
        generator1.type = 0
        generator1.x = 1
        generator1.w = canvas.width
        generator1.y = 0
      }
    }

    function update() {
      generator1.number = numberOfPieces
      // context.globalAlpha=.5;
      context.fillStyle = 'white'
      context.clearRect(0, 0, canvas.width, canvas.height)
      generator1.animate()
      requestAnimationFrame(update)
    }

    toggleEngine()
    update()

    return self
  }

  self.numberOfPieces = (...args) => {
    if(!args.length) { return numberOfPieces }
    numberOfPieces = args[0]
    return self
  }

  self.friction = (...args) => {
    if(!args.length) { return friction }
    friction = args[0]
    return self
  }

  self.wind = (...args) => {
    if(!args.length) { return wind }
    wind = args[0]
    return self
  }

  self.gravity = (...args) => {
    if(!args.length) { return gravity }
    gravity = args[0]
    return self
  }

  self.colors = (...args) => {
    if(!args.length) { return colors }
    colors = args[0]
    return self
  }

  self.opacity = (...args) => {
    if(!args.length) { return opacity }
    opacity = args[0]
    return self
  }

  self.recycle = (...args) => {
    if(!args.length) { return recycle }
    recycle = args[0]
    return self
  }

  return self
}

export default confetti
