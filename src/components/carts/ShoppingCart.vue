<template>
  <table class="table">
    <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items" :key="item.id">
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>
        <input type="number" class="form-control" @change="onUpdateQuantity(item, $event.target.value)" :value="item.quantity">
      </td>
      <td><button type="button" class="btn btn-danger" @click.prenvent="removeItem(item.id)">
        <i class="fa fa-trash-o" aria-hidden="true"></i>
      </button></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><strong>Total:<span class="ml-2">{{ totalPrice }}€</span></strong></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'shopping-cart',
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    computed: {
      ...mapGetters([
        'totalPrice'
      ])
    },
    methods: {
      ...mapActions([
        'updateQuantity',
        'removeItem'
      ]),
      onUpdateQuantity(item, value){
        let data = {
          id: item.id,
          quantity: value
        }
        this.updateQuantity(data)
      }
    }
  }
</script>
