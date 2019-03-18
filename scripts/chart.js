import { getBoxData } from './utils.js'
import { Line } from './components/line.js'

export class Chart {
  constructor(element, data) {
    this._element = element
    this._data = data
    
    this._setCanvas()
    this._setComponents()
    this.draw()
  }

  draw() {
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
    this._ctx.translate(0, height)
    this._ctx.scale(1, -1)

    this._element.appendChild(this._canvas)
  }

  _setComponents() {
    const { x, y } = this._data
    this._lines = y.datasets.map(item => new Line(
      this._ctx,
      {
        width: this._width,
        height: this._height,
        color: item.color,
        data: {
          x: x.data,
          y: item.data,
          domain: y.domain
        }
      }
    ))
  }
}