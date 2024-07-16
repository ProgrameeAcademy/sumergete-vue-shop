<script setup>
// TODO: Importar y usar el store de la tienda
</script>

<template>
  <div class="shopping-cart">
    <div class="cart-item">
      <h3>Nombre del Producto</h3>
      <p>Cantidad: X</p>
      <p class="price">Precio: $XX.XX</p>
      <button class="remove-item">Eliminar</button>
    </div>
    <!-- Más items del carrito irán aquí -->
    
    <div class="cart-total">
      <h3>Total: $XX.XX</h3>
    </div>
  </div>
</template>

<style scoped>
.shopping-cart {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-item {
  border-bottom: 1px solid #eee;
  padding: 15px 0;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item h3 {
  color: var(--primary-color);
  margin-top: 0;
}

.price {
  font-weight: bold;
  color: var(--secondary-color);
}

.remove-item {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-item:hover {
  background-color: #c0392b;
}

.cart-total {
  margin-top: 20px;
  text-align: right;
  font-size: 1.2em;
  color: var(--secondary-color);
}
</style>