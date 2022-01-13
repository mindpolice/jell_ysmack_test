<template>
  <div class="characters">



    <div v-if="characters !== ''"  class="character_box">
      <div v-for="(item, index) in characters" :key="index">

        <vs-card type="4" @click="selectCharacter(item)">
          <template #interactions>
            <p class="status" :style="item.status === 'Alive' ? 'background-color: #77DD76' : item.status === 'Dead' ? 'background-color: #FF6962' : 'background-color: #FFAA1C' " >
              <i class='bx bx-heart'></i> <span style="text-transform: capitalize">{{ item.status }}</span>
            </p>
          </template>
          <template #title>
            <h3>{{  item.name }}</h3>
          </template>
          <template #img>
            <img :src="item.image" alt="">
          </template>
          <template #text>
            <p style="width: fit-content; margin: 0 auto">
              Species: {{ item.species}}
            </p>
          </template>

        </vs-card>

      </div>
    </div>

    <!-- Navigation arrows -->
    <svg v-if="currentPage>1" @click="pageDown" id="arrow_left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
    <svg v-if="totalPage > currentPage"  @click="pageUp" id="arrow_right" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>


    <pulse-loader :loading="loading" color="#eee"  size="20px" id="loader"></pulse-loader>

  </div>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapState } from "vuex";

export default {
  name: 'Characters',
  components: {
    'PulseLoader': PulseLoader
  },
  mounted() {
    this.$store.dispatch('Characters/fetchCharacterList', this.currentPage)
    },
  computed: {
    ...mapState({
      totalPage: (state) => state.Characters.totalPage,
      characters: (state) => state.Characters.characterList.results,
      loading: (state) => state.Characters.loadingPage,
      currentPage: (state) => state.Characters.currentPage,
      searchInput: state => state.Characters.searchInput
    })
  },
  watch: {
    currentPage(){
        this.$store.dispatch('Characters/fetchCharacterList');
    }
  },
  methods: {
    pageUp(){
      this.$store.dispatch("Characters/setPageUp")
    },
    pageDown(){
      this.$store.dispatch("Characters/setPageDown")
    },
    selectCharacter(param){
      this.$router.push({ name: 'Selected Character', params: { id: Number(param.id), character: param }})
    }
  }

}

</script>

<style>

  @media screen and (max-width: 772px){

    .character_box {
      justify-content: center!important;
    }
  }



  .characters {
    height: 100vh;
    margin-top: 8rem;

  }



  #loader {
    position: fixed;
    top: 50%; left: 50%; transform: translate(-50%, 50%);
  }

  .character_box {
    margin: 0 auto!important;
    width: 80%;
    gap: 2rem;
    justify-content: space-between;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 2rem;
  }



  .vs-card-content.type-4 .vs-card__text {
    width: 100%;
  }

  #arrow_left {
    position: fixed; top: 50%; transform: translateY(-50%);
    left: 2%; cursor: pointer;
  }

  #arrow_right {
    position: fixed; top: 50%; transform: translateY(-50%);
    right: 2%; cursor: pointer;
  }

  .status {
    border-radius: 8px;
    color: white;
    padding: 0.1em 0.2em;
  }
</style>
