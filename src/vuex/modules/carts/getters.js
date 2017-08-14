export default {
  items: state => state.items,

  totalPrice: state => {
    let result = 0
    state.items.forEach((item) => {
      result += Number(item.price) * Number(item.quantity)
    })
    return result.toFixed(2)
  }
}

