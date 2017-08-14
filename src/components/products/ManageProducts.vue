<template>
  <div>
    <div class="mt-5">
      <product-form
        :product="productInForm"
        @submit="onFormSave"
        @cancel="resetProductInForm">
      </product-form>
    </div>
    <div class="mt-5">
      <products-table
        :products="products"
        @edit="onEditClicked"
        @remove="onRemoveClicked"
      ></products-table>
    </div>
  </div>
</template>

<script>
  import ProductForm from './SaveProductForm.vue'
  import ProductsTable from './ProductsTable.vue'

  import {mapActions, mapGetters} from 'vuex'

  const initialData = () => {
    return {
      productInForm: {
        name: '',
        description: '',
        price: '',
        imageUrl: 'https://unsplash.it/75/75/?random'
      }
    }
  }

  export default {
    name: 'manage-products',
    components: {
      ProductForm,
      ProductsTable
    },
    data: initialData,
    created(){
      this.fetchProducts()
    },
    computed: {
      ...mapGetters([
        'products'
      ])
    },
    methods: {
      ...mapActions([
        'fetchProducts',
        'saveProduct',
        'deleteProduct',
      ]),
      onFormSave(productData){
        this.saveProduct(productData).then(() => this.resetProductInForm())
      },
      resetProductInForm(){
        this.productInForm = initialData().productInForm
      },
      onEditClicked(product){
        this.productInForm = { ...product }
      },
      onRemoveClicked(productId){
        if(confirm('Are you sure?')) {
          this.deleteProduct(productId).then(() => {
            if(productId === this.productInForm.id)
              this.resetProductInForm()
          })
        }
      }
    }
  }
</script>
