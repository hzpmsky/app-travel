import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    city: '上海'
  },
  actions: {
    changeHotCity(ctx, city) {
      console.log('get city from vue component:' + city)
      ctx.commit('changeHotCity', city)
    }
  },
  mutations: {
    changeHotCity(state,city) {
      state.city = city
    }
  }
})
