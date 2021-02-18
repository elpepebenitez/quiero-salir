<template>
    <div  class="main-banner">
        <b-container>
            <b-row>
                <b-col>
                    <h1>Restricciones de movilidad en Panamá</h1>
                    <h4>Encuentra información actualizada sobre medidas tomadas por el COVID-19</h4>
                    <h3>Contribuye para mantener esta página accesible para tod@s</h3>
                    <b-button href="#" variant="outline-danger" size="lg" id="dona">Dona</b-button>
                    <!-- <b-button variant="outline-primary" size="sm" href="/nosotros">nosotros</b-button> -->
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
  name: 'Banner',
  components: {},
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-banner {
        background-size: cover;
        background-position: center;
        padding: 50px 0;
        border-bottom: 1px solid #027BFF;
    }
    h1 {
        padding-bottom: 25px;
    }
    h3 {
        padding-top: 50px;
        padding-bottom: 50px;
    }
</style>
