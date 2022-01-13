<template>
  <div class="navbar">
    <p class="header">
      Rick and Morty lister
    </p>
    <vs-input
      dark
      @input="filterCharacter"
      @change="onChangeInput"
      v-model="searchInput"
      state="dark"
      color="#eee"
      placeholder="Search character" />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      searchInput: ''
    }
  },
  methods: {
    onChangeInput(){
      this.$emit('onChangeInput', this.searchInput)
    },
    filterCharacter(){
      this.$store.dispatch('Characters/filterCharacterName', this.searchInput)
    }
  }
};
</script>

<style scoped>

body {
  background-color: #f7f8fa;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #FFFFFF;
  height: 7rem;
  top: 0%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.header {
  position: absolute;
  left: 2%;
  font-weight: 800;
}
</style>
