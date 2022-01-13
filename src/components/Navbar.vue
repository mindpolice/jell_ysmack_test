<template>
  <div class="navbar">
    <p class="header">
      Rick and Morty list utilitary
    </p>
    <p class="amountResult" >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="darkgrey"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>

      Page: <strong>{{ currentPage}} </strong>/ {{ totalPage ? totalPage : '' }}
    </p>




    <!-- Search input and button -->
    <div class="row search" v-if="$route.name === 'Characters'">
      <vs-input
        dark
        v-model="input"
        state="dark"
        color="#eee"

        placeholder="Search character"
        @keyup.enter="onSearchClick"/>
      <vs-button @click="onSearchClick" flat >Search </vs-button>
    </div>


    <!-- Checkboxes -->
    <div class="center select row" v-if="$route.name === 'Characters'">
      <span style="margin-right: 1em">Filter by status</span>
      <select  v-model="status" @change="filterByStatus">
        <option value="">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>

      </select>

    </div>


  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Navbar',
  data(){
    return {
      input: '',
      status: ''
    }
  },
  watch:  {
    // Pass searchInput value to parent component on cleared value
    input(){
      if(this.input === ''){
        this.updateMessage()
        this.$store.dispatch("Characters/clearSearchByName")
      }
    }
  },
  methods: {
    filterByStatus(){
      this.$store.dispatch("Characters/setStatus", this.status)
      this.$store.dispatch("Characters/setCurrentPage", 1)
      this.filterCharacter()
    },
    onSearchClick(){
      this.updateMessage()
      this.filterCharacter()
    },
    updateMessage () {
      this.$store.dispatch('Characters/setSearchInput', this.input)
    },

    // calling store GET filter by name
    filterCharacter(){
      this.$store.dispatch('Characters/fetchCharacterList', this.searchInput)
    },

  },
  computed: {
    ...mapState({
      totalPage: (state) => state.Characters.totalPage,
      amountFound: (state) => state.Characters.charactersAmountFound,
      charactersTotal: (state) => state.Characters.charactersTotalAmount,
      currentPage: (state) => state.Characters.currentPage,
      searchInput: state => state.Characters.searchInput
    })
  }
};
</script>

<style scoped lang="scss">
@import url("../../src/style/general.scss");


body {
  background-color: #f7f8fa;
}

.navbar {
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #FFFFFF;
  height: 8rem;
  top: 0%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
}

.header {
  position: absolute;
  left: 2%;
  font-weight: 800;
}

.search {
  position: absolute;
  top: 2rem;
  right: 10%;
}

.amountResult {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  top: 2rem;
  left: 2%;
}


.select {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 10%;
  top: 5rem;
}

select {
 border-radius: 8px;
}


</style>
