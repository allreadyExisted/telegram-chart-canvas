import { getBoxData } from './helpers/utils.js'
import { Line } from './components/line.js'
import { XAxis } from './components/xaxis.js'
import { YAxis } from './components/yaxis.js'

export class Chart {
  constructor(element, data) {
    this._element = element
    this._data = data
    
    this._setCanvas()
    this._setComponents()
    this.draw()
  }

  draw() {
    this._xAxis.draw()
    this._yAxis.draw()
    this._lines.forEach(line => {
      line.draw()
    })
  }

  _setCanvas() {
    this._canvas = document.createElement('canvas')
    this._ctx = this._canvas.getContext('2d')

    const { width, height } = getBoxData(this._element)
    this._width = width
    this._height = height

    this._canvas.width = width
    this._canvas.height = height

    this._element.appendChild(this._canvas)
  }

  _setComponents() {
    const { x, y } = this._data
    const commonArgs = (opts = {}) => [
      this._ctx,
      {
        yStart: this._height * .05,
        width: this._width,
        height: this._height * .95,
        ...opts
      }
    ]
    
    this._xAxis = new XAxis(...commonArgs())
    this._yAxis = new YAxis(...commonArgs({
      data: {
        domain: y.domain
      }
    }))

    this._lines = y.datasets.map(item => new Line(
      ...commonArgs({
        color: item.color,
        data: {
          x: x.data,
          y: item.data,
          domain: y.domain
        }
      })
    ))
  }
}