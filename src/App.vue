<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />

  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F8F9FB;
}
.container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
