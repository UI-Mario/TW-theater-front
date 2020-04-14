import axios from 'axios'

export function myAxios (config) {
  const instance = axios.create({
    timeout: 5000
  })
  return instance(config)
}
