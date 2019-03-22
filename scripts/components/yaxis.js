import { Element } from './element.js'
import { colors } from '../helpers/vars.js'
import { getTicks } from '../helpers/utils.js'

export class YAxis extends Element {
  constructor(ctx, opts) {
    super(ctx, opts)
  }

  draw() {
    const {
      yStart,
      height,
      data: { domain: [_, axisMax] }
    } = this._options
    this._ctx.strokeStyle = colors.axisColor
    this._ctx.beginPath()
    this._ctx.moveTo(0, height)
    this._ctx.lineTo(0, yStart)
    this._ctx.stroke()
    this._ctx.closePath()

    const ticks = getTicks(axisMax, height)
    ticks.forEach(item => {
      this._ctx.fillText(item.value, 0, item.position)
    })
  }
}