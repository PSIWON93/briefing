import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  //action api호출같은 비동기호출을 실행 
  actions
})

//어플리케이션 구동시 로그인확인
const { token } = localStorage
store.commit('LOGIN', token)

export default store 
