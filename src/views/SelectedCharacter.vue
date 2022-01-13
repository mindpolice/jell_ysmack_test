<template>
  <div class="selectedCharacter">
    <div class="center">



      <!-- Back to home header -->
      <div class="row justify"  @click="backToHome">
        <vs-button circle icon >
          <svg  xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="white"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
        </vs-button>
        <div> Back to Home</div>
      </div>

      <!-- Component main container -->
      <div class="row" style="gap: 2rem; justify-content: space-evenly">


        <vs-card type="4" >
          <template #title>
            <h3> {{ character? character.name : charactersFiltered.name }}</h3>
          </template>
          <template #text>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </template>
          <template #img>
            <img :src="character? character.image : charactersFiltered.image">
          </template>
        </vs-card>

        <div class="col" style="align-items: flex-start">

            <div class="row baseline"><h4>Species </h4> <p>{{ character? character.species : charactersFiltered.species }}</p></div>
            <div class="row baseline"><h4>Gender </h4> <p>{{ character? character.gender : charactersFiltered.gender }}</p></div>
            <div class="row baseline"><h4>Origin </h4> <p>{{ character? character.origin.name : charactersFiltered.origin.name }}</p></div>
        </div>


      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'SelectedCharacter',
  props: {
    id: Number,
    character: Array
  },
  created() {
    if(this.character === undefined) {
      this.$store.dispatch('Characters/fetchCharacterById', this.id);
    }
  },
  methods: {
    backToHome(){
      this.$router.push('/characters')
    }
  },
  computed: {
    ...mapState({
      charactersFiltered: (state) => state.Characters.characterList,
    })
  },
};
</script>

<style scoped>

.selectedCharacter {
  margin: 8rem 2% 0 2%;
}

.justify {
   align-items: baseline;
  margin-bottom: 2rem;
}

.baseline {
  align-items: baseline;

  gap: 1rem;
}

</style>
