<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Shop</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          :to="{name: 'products'}"
          class="nav-item nav-link"
          exact-active-class="active"
          >
          Products
        </router-link>
        <router-link
          :to="{name: 'manage-products'}"
          class="nav-item nav-link"
          exact-active-class="active"
          >
          Manage Products
        </router-link>
      </ul>
      <div class="dropdown">
        <button :disabled="!items.length" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shopping Cart
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <shopping-cart :items="items"></shopping-cart>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import ShoppingCart from './carts/ShoppingCart.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      ShoppingCart
    },
    created(){
      this.fetchItems()
    },
    computed: {
      ...mapGetters([
        'items'
      ])
    },
    methods: {
      ...mapActions([
        'fetchItems',
      ])
    }
  }
</script>
