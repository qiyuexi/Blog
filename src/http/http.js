import api from './api'

const request = (options) => {
  // console.log('options ---', options.url);
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.params
  }
  if (options.method.toLowerCase() === 'post') {
    options.data = options.data
  }
  return api(options)
}

export default request