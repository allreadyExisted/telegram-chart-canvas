const defaultOpts = {
  width: 0,
  height: 0,
  color: '#666',
  data: {
    x: [],
    y: [],
    domain: [0, 0]
  }
}

export class Line {
  constructor(ctx, opts = {}) {
    const options = {
      ...defaultOpts,
      ...opts
    }

    this._options = options
    this._ctx = ctx
  }

  draw() {
    const {
      width,
      height,
      data: { x, y, domain: [_, yMax] }
    } = this._options
    const xPerc = width / x.length
    const yPerc = height / yMax
    this._ctx.strokeStyle = this._options.color
    this._ctx.beginPath()
    x.forEach((_, index) => {
      if (index === 0)
        this._ctx.moveTo(0, yPerc * y[index])
      else
        this._ctx.lineTo(xPerc * index, yPerc * y[index])
    })
    this._ctx.stroke()
    this._ctx.closePath()
  }
}