import axios from "axios"


const state = {
  characterList: '',
  currentPage: 0,
  charactersFiltered: []
}



const actions = {

  fetchCharacterList(context){
    axios.get(`https://rickandmortyapi.com/api/character/?page=${ context.currentPage }`)
      .then((res) => {
        context.commit('SET_CHARACTER_LIST', res.data.results)
      })
      .catch(()=> {

      })
  },

  filterCharacterName(context, name){
    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then((res) => {
        context.commit('SET_FILTER_CHARACTER', res.data.results)
      })
      .catch(()=> {

      })
  }

}

const mutations = {

  SET_CHARACTER_LIST(state, characterList){
    state.characterList = characterList
  },

  SET_FILTER_CHARACTER(state, charactersFiltered){
    state.charactersFiltered = charactersFiltered
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
