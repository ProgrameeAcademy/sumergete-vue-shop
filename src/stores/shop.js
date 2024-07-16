import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import productsData from '../data/products.json'

export const useShopStore = defineStore('shop', () => {
  // Estado
  const products = ref([])
  const cart = ref([])

  // Getters (computados)
  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  })

  const cartItemsCount = computed(() => {
    return cart.value.reduce((count, item) => count + item.quantity, 0)
  })

  // Acciones
  function initializeProducts() {
    products.value = productsData
  }

  function addToCart(product) {
    const existingItem = cart.value.find(item => item.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }

  function removeFromCart(productId) {
    const index = cart.value.findIndex(item => item.id === productId)
    if (index !== -1) {
      const item = cart.value[index]
      if (item.quantity > 1) {
        item.quantity--
      } else {
        cart.value.splice(index, 1)
      }
    }
  }

  function clearCart() {
    cart.value = []
  }

  // Acción adicional para actualizar la cantidad de un item en el carrito
  function updateCartItemQuantity(productId, quantity) {
    const item = cart.value.find(item => item.id === productId)
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        removeFromCart(productId)
      }
    }
  }

  return { 
    products, 
    cart, 
    cartTotal, 
    cartItemsCount, 
    initializeProducts, 
    addToCart, 
    removeFromCart, 
    clearCart,
    updateCartItemQuantity
  }
})