<template>
  <form @submit.prevent="onSubmit">
    <div class="row justify-content-center">
      <div class="col-6">
        <h3>Add new Product</h3>
        <div class="form-group">
          <label>Name</label>
          <input v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('name') }" name="name"
                 v-model="product.name" placeholder="Enter name">
          <span class="invalid-feedback">{{ errors.first('name') }}</span>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('description') }"
                    name="description" v-model="product.description" placeholder="Enter description"
                    rows="5"></textarea>
          <span class="invalid-feedback">{{ errors.first('description') }}</span>
        </div>
        <div class="form-group">
          <label>Price €</label>
          <input type="number"
                 v-validate="'required|decimal:2'"
                 :class="{'form-control': true, 'is-invalid': errors.has('price') }"
                 name="price"
                 min="0"
                 step="any"
                 v-model="product.price"
                 placeholder="Enter price">
          <span class="invalid-feedback">{{ errors.first('price') }}</span>
        </div>
        <div class="form-group">
          <label>Image url</label>
          <input v-validate="'required'" :class="{'form-control': true, 'is-invalid': errors.has('imageUrl') }" name="imageUrl"
                 v-model="product.imageUrl" placeholder="Enter imageUrl">
          <span class="invalid-feedback">{{ errors.first('name') }}</span>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            {{ product.id ? 'Update' : 'Save' }}
          </button>
          <button v-if="product.id" @click.prenvent="onCancel" class="btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VeeValidate from 'vee-validate'

  Vue.use(VeeValidate);

  export default {
    name: 'product-form',
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    methods: {
      onSubmit() {
        this.$validator.validateAll().then(result => {
          if(result)
            this.$emit('submit', this.product)
        })
      },
      onCancel() {
        this.$emit('cancel')
      }
    }
  }
</script>
