// backend api 호출 

import axios from 'axios'
import router from '../router'

//api 호출하려면 domain 정보필요 
const DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401

//401 페이지 해결
const onUnauthorized = () => {
  //router가 login 화면으로 움직일 수 있도록 함 
  router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
} 


const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  }).then(result => result.data)
    .catch(result => {
      console.log(result)
      const {status} = result.response
      console.log(status)
      if (status === UNAUTHORIZED) return onUnauthorized()
      throw Error(result)
    })
}

//토큰정보를 받아서 axios 라이브러리 안에다가 기능추가 ,
// 모든 리퀘스트 날리기 전에 해더값을 토큰정보로 설정하는 역할
export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
}


export const board = {
  fetch(id) {
    //api와 형식 매칭
    return id ? request('get', `/boards/${id}`) : request('get', '/boards')
  },
  //400 error 
  create(title){
    return request('post','/boards',{ title })
  }
}

export const auth = {
  login(email, password) {
    return request('post', '/login', {email, password})
  }
}

export const card = {
  create(title, listId, pos) {
    return request('post', '/cards', {title, listId, pos})
  },
  fetch(id) {
    return request('get', `/cards/${id}`)
  },
  update(id, payload) {
    return request('put', `/cards/${id}`, payload)
  }
}