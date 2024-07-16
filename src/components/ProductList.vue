<script setup>
// TODO: Importar y usar el store de la tienda
</script>

<template>
  <div class="product-list">
    <div class="product">
      <h3>Nombre del Producto</h3>
      <p>Descripción del producto</p>
      <p class="price">Precio: $XX.XX</p>
      <button class="add-to-cart">Añadir al carrito</button>
    </div>
    <!-- Más productos irán aquí -->
  </div>
</template>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product {
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.product:hover {
  transform: translateY(-5px);
}

h3 {
  color: var(--primary-color);
  margin-top: 0;
}

.price {
  font-weight: bold;
  color: var(--secondary-color);
}

.add-to-cart {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #2980b9;
}
</style>