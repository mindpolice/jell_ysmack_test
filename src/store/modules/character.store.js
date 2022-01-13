import axios from "axios"


const state = {
  searchInput: '',
  characterList: '',
  currentPage: 1,
  loadingPage: true,
  charactersTotalAmount: undefined,
  charactersFiltered: [],
  charactersAmountFound: undefined,
  totalPage: undefined,
  status: '',

}



const actions = {

  setSearchInput(context, input){
    context.commit('SET_SEARCH_INPUT', input)
  },

  fetchCharacterList(context){
    context.commit("SET_LOADING", true)

    axios.get(`https://rickandmortyapi.com/api/character/?page=${ context.state.currentPage }&name=${ context.state.searchInput }&status=${context.state.status}`)
      .then((res) => {
        context.commit('SET_TOTAL_AMOUNT_CHARACTER', res.data.info.count)
        context.commit('SET_TOTAL_PAGE', res.data.info.pages)
        context.commit('SET_CHARACTER_LIST', res.data)
        context.commit("SET_LOADING", false)

      })
      .catch(()=> {
        context.commit("SET_LOADING", false)

      })
  },

  fetchCharacterById(context, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        context.commit('SET_CHARACTER_LIST', res.data)
      })
      .catch(()=> {
        context.commit("SET_LOADING", false)

      })
  },

  clearSearchByName(context){
    context.commit('CLEAR_FILTER_SEARCH')
    context.commit('SET_CURRENT_PAGE', 1)
    context.dispatch('fetchCharacterList')
  },

  setPageUp(context){
    context.commit('SET_PAGE_UP')
  },



  setPageDown(context){
    context.commit('SET_PAGE_DOWN')
  },

  setCurrentPage(context, page){
    context.commit("SET_CURRENT_PAGE", page)
  },

  setStatus(context, status){
    context.commit("SET_STATUS", status)
  }



}

const mutations = {

  SET_SEARCH_INPUT(state, searchInput){
    state.searchInput = searchInput
  },

 SET_CHARACTER_LIST(state, characterList){
    state.characterList = characterList
  },

  SET_FILTER_CHARACTER(state, charactersFiltered){
    state.charactersFiltered = charactersFiltered
  },

  SET_TOTAL_AMOUNT_CHARACTER(state, amount){
    state.charactersTotalAmount = amount
  },

  SET_AMOUND_FOUND_CHARACTER(state, amount){
    state.charactersAmountFound = amount
  },

  CLEAR_FILTER_SEARCH(state){
    state.charactersFiltered = []
    state.charactersAmountFound = undefined
  },

  SET_TOTAL_PAGE(state, total){
    state.totalPage = total
  },

  SET_PAGE_UP(state){
    state.currentPage = state.currentPage+ 1
  },

  SET_PAGE_DOWN(state){
    state.currentPage = state.currentPage- 1
  },

  SET_CURRENT_PAGE(state, page){
    state.currentPage = page
  },

  SET_LOADING(state, param){
    state.loadingPage = param
  },

  SET_STATUS(state, status){
    state.status = status
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
