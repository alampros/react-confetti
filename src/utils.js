export function norm(value, min, max) {
  return (value - min) / (max - min)
}

export function lerp(lnorm, min, max) {
  return ((max - min) * lnorm) + min
}

export function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(norm(value, sourceMin, sourceMax), destMin, destMax)
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max))
}

export function distance(p0, p1) {
  const dx = p1.x - p0.x
  const dy = p1.y - p0.y
  return Math.sqrt((dx * dx) + (dy * dy))
}

export function distanceXY(x0, y0, x1, y1) {
  const dx = x1 - x0
  const dy = y1 - y0
  return Math.sqrt((dx * dx) + (dy * dy))
}

export function circleCollision(c0, c1) {
  return distance(c0, c1) <= c0.radius + c1.radius
}

export function circlePointCollision(x, y, circle) {
  return distanceXY(x, y, circle.x, circle.y) < circle.radius
}

export function inRange(value, min, max) {
  return value >= Math.min(min, max) && value <= Math.max(min, max)
}

export function pointInRect(x, y, rect) {
  return inRange(x, rect.x, rect.x + rect.width)
    && inRange(y, rect.y, rect.y + rect.height)
}

export function rangeIntersect(min0, max0, min1, max1) {
  return Math.max(min0, max0) >= Math.min(min1, max1)
    && Math.min(min0, max0) <= Math.max(min1, max1)
}

export function rectIntersect(r0, r1) {
  return rangeIntersect(r0.x, r0.x + r0.width, r1.x, r1.x + r1.width)
    && rangeIntersect(r0.y, r0.y + r0.height, r1.y, r1.y + r1.height)
}

export function degreesToRads(degrees) {
  return degrees / (180 * Math.PI)
}

export function radsToDegrees(radians) {
  return (radians * 180) / Math.PI
}

export function randomRange(min, max) {
  return min + (Math.random() * (max - min))
}

export function randomInt(min, max) {
  return Math.floor(min + (Math.random() * ((max - min) + 1)))
}
