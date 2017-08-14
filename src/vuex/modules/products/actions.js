import {
  FETCH_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from './mutation-types'

export default {

  fetchProducts ({ commit }) {
    return axios.get('products')
      .then(response => commit(FETCH_PRODUCTS, response.data))
      .catch(error => console.error(error))
  },

  createProduct ({ commit }, productData) {
    return axios.post('products', productData)
      .then(response => {
      commit(CREATE_PRODUCT, response.data)
        return response.data.id
      })
      .catch(error => console.error(error))
  },

  updateProduct ({ commit }, productData) {
    return axios.put(`products/${productData.id}`, productData)
      .then(response => commit(UPDATE_PRODUCT, response.data))
      .catch(error => console.error(error))
  },

  saveProduct ({ dispatch, state }, product) {
    const index = state.all.findIndex((p) => p.id === product.id)

    if(index !== -1) {
      dispatch('updateProduct', product)
    } else {
      dispatch('createProduct', product)
    }
  },

  deleteProduct ({ commit }, productId) {
    return axios.delete(`products/${productId}`)
      .then(response => commit(DELETE_PRODUCT, productId))
      .catch(error => console.error(error))
  }
}
