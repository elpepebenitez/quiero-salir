<template>
    <div>
        <div class="main-info">
            <h2>¿Qué puedes y qué no puedes hacer?</h2>
            <p>De la telaraña de Decretos y Resolucions recogimos la última <router-link to="/normativa">normativa</router-link> para poder resumir las restricciones que se aplican actualmente</p>
            <p>Actualizado al 16 de febrero de 2021</p>
            <b-container>
                <b-row>
                    <b-col col xs="12">
                        <h3>A nivel nacional</h3>
                    </b-col>
                    <b-col col xs="12">
                        <h3>Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h3>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Banner',
  data() {
        return {}
  },
  components: {
  },
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-info {
        height: 400px;
    }
</style>
