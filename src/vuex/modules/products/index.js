import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const initialState = {
  all: []
}

export default {
  state: {...initialState},
  getters,
  actions,
  mutations,
}
