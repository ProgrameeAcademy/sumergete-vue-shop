<script setup>
// TODO: Importar RouterLink y RouterView de vue-router
</script>

<template>
  <div class="app-container">
    <header>
      <h1>Programee Shop</h1>
      <nav>
        <a href="#" class="nav-link">Inicio</a>
        <a href="#" class="nav-link">Tienda</a>
        <a href="#" class="nav-link">Carrito</a>
      </nav>
    </header>

    <main>
      <!-- El contenido de las páginas irá aquí -->
    </main>

    <footer>
      <p>&copy; 2024 Programee Shop. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<style>
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --background-color: #ecf0f1;
  --text-color: #333;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--background-color);
  color: var(--text-color);
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

header {
  background-color: var(--secondary-color);
  color: white;
  padding: 1rem 0;
  text-align: center;
}

h1 {
  margin: 0;
  font-size: 2rem;
}

nav {
  margin-top: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  padding: 2rem 0;
}

footer {
  background-color: var(--secondary-color);
  color: white;
  text-align: center;
  padding: 1rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 1200px;
}
</style>