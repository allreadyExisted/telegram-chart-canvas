import { fetchAsync, normalizeData } from './utils.js'
import { Chart } from './chart.js'

fetchAsync('/data/chart_data.json').then(data => {
  const wrapper = document.getElementById('js-charts')
  data.forEach(chartItemData => {
    const element = document.createElement('div')
    element.className = 'chart-wrapper'
    wrapper.appendChild(element)
    
    new Chart(element, normalizeData(chartItemData))
  })
})