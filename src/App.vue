<template>
  <div id="app">
    <b-container fluid>
      <b-row id="nav">
          <b-col>
            <router-link to="/">Restricciones</router-link>
            <router-link to="/nosotros">Nosotros</router-link>
            <router-link to="/normativa">Normativa</router-link>
          </b-col>
      </b-row>
    </b-container>

    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
  border-bottom: 1px solid #027BFF;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding-left: 8px;
  padding-right: 8px;
}

#nav a.router-link-exact-active {
  color: #027BFF;
}

#dona:hover {
  color: white;
}
</style>
