import { Element } from './element.js'
import { colors } from '../helpers/vars.js'

export class XAxis extends Element {
  constructor(ctx, opts) {
    super(ctx, opts)
  }

  draw() {
    const { yStart, width } = this._options
    this._ctx.strokeStyle = colors.axisColor
    this._ctx.beginPath()
    this._ctx.moveTo(0, yStart)
    this._ctx.lineTo(width, yStart)
    this._ctx.stroke()
    this._ctx.closePath()
  }
}