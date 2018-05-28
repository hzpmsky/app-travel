let defaultCity = '杭州'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  console.log('浏览器不支持读取localStorage')
}

export default {
  city: defaultCity
}
