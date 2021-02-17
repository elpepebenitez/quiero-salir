<template>
  <div class="search">
    <b-container>      
      <h3>Encuentra la actividad que buscas</h3>
      <b-form-input v-model="text" size="sm" placeholder="Actividad" id="input"></b-form-input>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id reiciendis aliquam inventore numquam veniam, harum dolorum quis voluptas. Veritatis, eius nisi! Reiciendis debitis corporis quibusdam consequuntur optio saepe recusandae enim.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id reiciendis aliquam inventore numquam veniam, harum dolorum quis voluptas. Veritatis, eius nisi! Reiciendis debitis corporis quibusdam consequuntur optio saepe recusandae enim.</p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      text: '',
    }
  },
  props: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #input {
    width: 150px;
    display: inline;
  }
</style>