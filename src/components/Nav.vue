<template>
<div class="navbar">
  <router-link to="/">Restricciones</router-link>
  <router-link to="/actividades">Actividades</router-link>
  <router-link to="/nosotros">Nosotros</router-link>
  <router-link to="/normativa">Normativa</router-link>
</div>

</template>

<script>

</script>

<style scoped>
.navbar {
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: center;

}

.navbar a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 5px;
  padding-right: 5px;
  display: inline;
}

.navbar a.router-link-exact-active {
  color: #027BFF;
}
</style>