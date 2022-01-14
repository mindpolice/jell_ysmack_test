<template>
  <div class="selectedCharacter">
    <div class="center">





      <!-- Component main container -->
      <div class="row selectedCharacterContainer" style="gap: 2rem; justify-content: space-evenly">
        <vs-card type="4" class="card" >

          <template #title>
            <h3> {{ character? character.name : charactersFiltered.name }}</h3>
          </template>
          <template #text>
            <p>
            </p>
          </template>
          <template #img>
            <img :src="character? character.image : charactersFiltered.image">
          </template>
        </vs-card>


        <div class="separator"></div>

        <!-- Character informations -->
        <div class="col infos" >

            <div class="row baseline">
              <h4>Species </h4> <p>{{ character? character.species : charactersFiltered.species }}</p>

              <h4>Status </h4> <p>{{ character? character.status : charactersFiltered.status }}</p>
              </div>

            <div class="row baseline"><h4>Gender </h4> <p>{{ character? character.gender : charactersFiltered.gender }}</p></div>
            <div class="row baseline"><h4>Origin </h4> <p>{{ character? character.origin.name : charactersFiltered.origin.name }}</p></div>
            <div class="row baseline"><h4>Present in </h4> <p>{{ character? character.episode.length : charactersFiltered.episode.length }}</p> episodes</div>

        </div>


      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
import router from '../router';

export default {
  name: 'SelectedCharacter',
  props: {
    id: Number,
    character: Object
  },
  created() {
    // Specifying selected character in tab title
    document.title = "Test tech" + ' - ' + this.$store.state.Characters.characterList.name

    // Exception handling if user refreshes the page or shares the link, will GET queried user
    if(this.character === undefined) {
      this.$store.dispatch('Characters/fetchCharacterById', this.id);
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

@media screen and (max-width: 710px){
  .selectedCharacterContainer {
    flex-direction: column!important;
    align-items: center!important;
  }


  .card {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .infos {
    width: auto!important;
    margin: 0 auto!important;
  }

}

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

.separator {
  width: 2px;
  background-color: #eee;
  height: auto;
}

.card {
  width: 30%;
}

.infos {
  align-items: flex-start; width: 30%;
}

</style>
