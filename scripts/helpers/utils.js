export const fetchAsync = async (url) => 
  await (await fetch(url)).json()

export const normalizeData = data => {
  const xAxisData = (data.columns.find(item => item[0] === 'x') || []).slice(1)
  const yAxesData = {}
  const yMin = []
  const yMax = []
  
  data.columns.forEach(item => {
    if (!item[0].startsWith('x')) {
      const name = item[0]
      const axisData = item.slice(1)
      yMin.push(Math.min(...axisData)) 
      yMax.push(Math.max(...axisData))
      yAxesData[name] = {
        type: data.types[name],
        name,
        color: data.colors[name],
        data: axisData
      }
    }
  })

  const yAxisMax = Math.max(...yMax)
  const depth = Math.floor(Math.log10(yAxisMax) + 1) - 1
  const pow = Math.pow(10, depth)
  const max = Math.ceil(yAxisMax / pow) * pow

  return {
    x: {
      data: xAxisData
    },
    y: {
      domain: [Math.min(...yMin), max],
      datasets: Object.keys(data.names).map(name => yAxesData[name])
    }
  }
}

export const getBoxData = element => {
  const {
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft
  } = getComputedStyle(element)
  let width = element.clientWidth
  let height = element.clientHeight
  width -= parseFloat(paddingLeft) + parseFloat(paddingRight)
  height -= parseFloat(paddingTop) + parseFloat(paddingBottom)
  return {
    width,
    height
  }
} 
