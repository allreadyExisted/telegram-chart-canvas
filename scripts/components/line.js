import { Element } from './element.js'

export class Line extends Element {
  constructor(ctx, opts) {
    super(ctx, opts)
  }

  draw() {
    const {
      yStart,
      width,
      height,
      data: { x, y, domain: [_, yMax] }
    } = this._options
    const xPerc = width / x.length
    const yPerc = height / yMax
    this._ctx.strokeStyle = this._options.color
    this._ctx.beginPath()
    x.forEach((_, index) => {
      const xPoint = xPerc * index
      const yPoint = height - (yPerc * y[index])
      if (index === 0)
        this._ctx.moveTo(0, yPoint)
      else
        this._ctx.lineTo(xPoint, yPoint)
    })
    this._ctx.stroke()
    this._ctx.closePath()
  }
}