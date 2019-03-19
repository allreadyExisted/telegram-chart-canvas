import { Element } from './element.js'
import { colors } from '../helpers/vars.js'

export class YAxis extends Element {
  constructor(ctx, opts) {
    super(ctx, opts)
  }

  draw() {
    const { yStart, height } = this._options
    this._ctx.strokeStyle = colors.axisColor
    this._ctx.beginPath()
    this._ctx.moveTo(0, yStart)
    this._ctx.lineTo(0, height)
    this._ctx.stroke()
    this._ctx.closePath()
  }
}