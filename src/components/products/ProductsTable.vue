<template>
  <div class="row justify-content-center">
    <div class="col-10">
      <h3 class="text-center mb-3">Products List</h3>
      <table class="table">
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(product, index) in products" :key="product.id">
          <td>
            <img :src="product.imageUrl" class="img-thumbnail" style="width: 75px">
          </td>
          <td>{{ product.name }}</td>
          <td class="h6">{{ product.description }}</td>
          <td>{{ product.price }} €</td>
          <td>
            <button @click.prevent="onEdit(product)" type="button" class="btn btn-outline-secondary">
              <i class="fa fa-edit" aria-hidden="true"></i>
            </button>
            <button @click.prevent="onRemove(product.id)" type="button" class="btn btn-outline-secondary">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'products-table',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      onEdit(product){
        this.$emit('edit', product)
      },
      onRemove(productId){
        this.$emit('remove', productId)
      }
    }
  }
</script>
