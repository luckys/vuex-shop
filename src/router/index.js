import Vue from 'vue'
import Router from 'vue-router'
import ManageProducts from '@/components/products/ManageProducts.vue'
import ProductsList from '@/components/products/ProductsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsList
    },
    {
      path: '/manage-products',
      name: 'manage-products',
      component: ManageProducts
    }
  ]
})
