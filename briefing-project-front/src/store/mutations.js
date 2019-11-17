import { setAuthInHeader } from '../api'
const mutations = {
  SET_IS_ADD_BOARD (state, toggle) {
    state.isAddBoard = toggle
  },
  //boards 상태를 바꿔줄 변이함수가 필요 (단순 state 설정역할) 
  SET_BOARDS (state, boards) {
    state.boards = boards 
  },
  SET_BOARD (state, board) {
    state.board = board
  },
  SET_CARD(state, card) {
    state.card = card
  },
  LOGIN (state, token) {
    if (!token) return 
    state.token = token
    localStorage.setItem('token', token)
    setAuthInHeader(token)
  },
  LOGOUT (state) {
    state.token = null
    delete localStorage.token
    setAuthInHeader(null)
  }
  
}

export default mutations