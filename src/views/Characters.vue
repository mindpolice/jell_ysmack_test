<template>
  <div class="characters">



    <div v-if="characters !== ''"  class="character_box">
      <div v-for="(item, index) in (searchInput === '' ? characters : charactersFiltered )" :key="index">

        <vs-card type="4">
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


    <pulse-loader :loading="characters === ''" color="#eee"  size="20px" id="loader"></pulse-loader>

  </div>
</template>

<script>

import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapState, mapActions } from "vuex";

export default {
  name: 'Characters',
  components: {
    'PulseLoader': PulseLoader
  },
  props: {
    searchInput: String
  },
  mounted() {
    this.$store.dispatch('Characters/fetchCharacterList')
    },
  computed: {
    ...mapState({
      characters: (state) => state.Characters.characterList,
      charactersFiltered: (state) => state.Characters.charactersFiltered,
    }),
  },
}

</script>

<style>



  .characters {
    height: 100vh;
    margin-top: 10rem;

  }


  #loader {
    position: fixed;
    top: 50%; left: 50%; transform: translate(-50%, 50%);
  }

  .character_box {
    margin: 0 auto;
    width: 80%;
    gap: 1rem;
    justify-content: space-between;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .vs-card-content.type-4 .vs-card__text {
    width: 100%;
  }
</style>
