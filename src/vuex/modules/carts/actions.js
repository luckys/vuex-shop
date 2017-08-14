import {
  FETCH_ITEMS,
  ADD_TO_CART,
  UPDATE_QUANTITY,
  REMOVE_FROM_CART,
} from './mutation-types'

export default {

  fetchItems ({ commit }){
    return axios.get('carts')
      .then(response => commit(FETCH_ITEMS, response.data))
      .catch(error => console.log(error))
  },

  addToCart ({ commit }, item){
    let newItem = {
      name: item.name,
      price: item.price,
      quantity: 1,
      product_id: item.id,
    }
    return axios.post('carts', newItem)
      .then(response => commit(ADD_TO_CART, response.data))
      .catch(error => console.error(error))
  },

  updateQuantity ({ commit }, item){
    return axios.put(`carts/${item.id}`, { quantity: item.quantity })
      .then(response => commit(UPDATE_QUANTITY, response.data))
      .catch(error => console.log(error))
  },

  removeItem ({ commit }, itemId) {
    return axios.delete(`carts/${itemId}`)
      .then(response => commit(REMOVE_FROM_CART, itemId))
      .catch(error => console.error(error))
  }
}
