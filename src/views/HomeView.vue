<script setup></script>

<template>
  <main class="home-container">
    <h1>Bienvenido al Home! 😎</h1>
    <h2>Has iniciado sesión 🤭!</h2>
    <a
      ><img
        class="catgif"
        src="https://i.pinimg.com/originals/a9/fb/d4/a9fbd437bf2255bf60b6bff1fabf4bed.gif"
        alt=""
    /></a>
  </main>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f5;
  color: #333;
  font-family: "Arial", sans-serif;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
}

h2 {
  font-size: 2rem;
  color: #2980b9;
}

.catgif {
  width: 300px;
  height: auto;
  margin: 0 auto;
}
</style>
