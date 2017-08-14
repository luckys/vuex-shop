<template>
  <div class="mt-5">
    <h3>Products List</h3>
    <div class="card-deck" v-if="products.length">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @addCart="addToCart">
      </product-card>
    </div>
    <div v-else>
      <p>There are not products</p>
    </div>
  </div>
</template>

<script>

  import ProductCard from './ProductCard.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'products-list',
    components: {
      ProductCard
    },
    created(){
      this.fetchProducts()
    },
    computed: {
      ...mapGetters([
        'products',
      ])
    },
    methods: {
      ...mapActions([
        'fetchProducts',
        'addToCart',
      ])
    }
  }
</script>
