const getters = {
  // getters는 state를 인자로 받음 
  isAuth (state) {
    return !!state.token
  }
}

export default getters 