<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  components: { Navbar },
  data (){
    return {
      searchInput: '',
      currentPage: undefined
    }
  },
  methods: {
    onChangeInput(e){
      this.searchInput = e
    },
    changePage(e){
      this.currentPage = e
    }
  }
};
</script>

<style lang="scss">
html, body { margin: 0 }
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
