import {
  FETCH_ITEMS,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from './mutation-types'

export default {

  [FETCH_ITEMS] (state, items) {
    state.items = items
  },

  [ADD_TO_CART] (state, item) {
    state.items.push(item)
  },

  [UPDATE_QUANTITY] (state, item) {
    const index = state.items.findIndex(p => p.id === item.id)
    if(index !== -1)
    state.items.splice(index, 1, item)
  },

  [REMOVE_FROM_CART] (state, itemId) {
    state.items = state.items.filter(p => p.id !== itemId)
  }
}
