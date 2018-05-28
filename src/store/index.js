import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
  //state mutations进行分拆
  // state: {
  //   city: '上海'
  // },
  // actions: {
  //   changeHotCity(ctx, city) {
  //     console.log('get city from vue component:' + city)
  //     ctx.commit('changeHotCity', city)
  //   }
  // },
  // mutations: {
  //   changeHotCity(state,city) {
  //     state.city = city
  //   }
  // }
})
