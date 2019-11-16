import Vue from 'vue'
import router from './router'
import App from './App.vue'
import store from './store'

//1.어플리케이션의 엔트리포인트가 App을 렌더링한다 
//2.라우트를 설정한다 

new Vue({
  el: '#app',
  // render: h => h(App)
  //화면을 그리는 rend 함수, 인자로 넘어온 h함수를 통해서 app이라는 컴포넌트를 그리고 있음 
  router,
  store,
  //경로에 따라 화면반환하기
  render: h => h(App)
})
