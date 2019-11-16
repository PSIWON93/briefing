<template>
  <div class="">
    Board
    <div v-if="loading">loading board... </div>
    <div v-else>
      <div>{{ bid }}</div>
      <router-link :to="`/b/${bid}/c/1`">card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">card 2</router-link>
    </div>
    <hr />
    <!-- 아래가 children 부분이 들어갈곳 -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data(){
    return {
      bid: 0,
      loading: false
    }
  }, 
  created() {
    this.fetchData()
    
    
  },
  methods: {
    fetchData(){
      this.loading = true
      setTimeout(()=> {
        this.bid = this.$route.params.bid
        console.log(this.$route.params+"asd");
        this.loading = false
      }, 500)
    }
  }
}
</script>

<style>

</style>