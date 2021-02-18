<template>
  <div class="search">
    <b-container>      
      <h3>Encuentra la actividad que buscas</h3>
      <b-form-input v-model="text" size="sm" placeholder="Actividad" id="input"></b-form-input>
      <b-row>
        <b-col>
          <span v-for="activity in activities" :key="activity">● {{ activity }}</span>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      text: '',
      activities: [],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #input {
    width: 150px;
    display: inline;
  }
</style>