<template>
  <div id="app">
    <Navbar @onChangeInput="onChangeInput"/>
    <router-view :searchInput="searchInput"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  components: { Navbar },
  data (){
    return {
      searchInput: ''
    }
  },
  methods: {
    onChangeInput(e){
      this.searchInput = e
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
