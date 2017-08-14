<template>
  <div class="col-4 mt-3">
    <div class="card">
      <img class="card-img-top mx-auto d-block" :src="product.imageUrl" alt="Card image cap" style="width: 200px">
      <div class="card-body">
        <h3 class="text-right mr-3">
          <span class="badge badge-secondary">{{ product.price }} €</span>
        </h3>
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.description | truncate(50) }}</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary" :disabled="this.isAdded()" @click.prevent="onAddToCart(product)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'product-card',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'items'
      ])
    },
    methods: {
      onAddToCart(item){
        this.$emit('addCart', item)
      },
      isAdded() {
        const element = this.items.find(p => p.product_id === this.product.id)
        return Boolean(element)
      }
    },
    filters: {
      truncate (text, stop){
        return text.slice(0, stop) + '...'
      }
    }
  }
</script>
