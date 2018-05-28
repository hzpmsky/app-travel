export default {
  changeHotCity(state, city) {
    state.city = city
    //将每次选择的city存入localStorage
    try {
      localStorage.city = city
    } catch (e) {
      console.log('浏览器不支持使用localStorage')
    }
  }
}
