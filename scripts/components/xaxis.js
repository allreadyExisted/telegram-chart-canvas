import { Element } from './element.js'
import { colors } from '../helpers/vars.js'

export class XAxis extends Element {
  constructor(ctx, opts) {
    super(ctx, opts)
  }

  draw() {
    const { width, height } = this._options
    this._ctx.strokeStyle = colors.axisColor
    this._ctx.beginPath()
    this._ctx.moveTo(0, height)
    this._ctx.lineTo(width, height)
    this._ctx.stroke()
    this._ctx.closePath()
  }
}