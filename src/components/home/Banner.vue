<template>
    <div  class="main-banner">
        <b-container>
            <b-row>
                <b-col>
                    <h1>Restricciones de movilidad en Panamá</h1>
                    <h4>Encuentra información actualizada sobre medidas tomadas por el COVID-19</h4>
                    <h3 id="h3">Ayúdanos a mantener esta página accesible para tod@s</h3>
                    <b-button v-b-modal.modal-banner variant="warning" size="lg" id="dona" style="color: white; font-weight: 900;">Cómpranos un café</b-button>
                    <div>
                        <b-modal id="modal-banner" title="¡Hola!" ok-only centered>
                            <p class="my-4">No nos tienes que dar nada por usar esta página, pero cualquier aporte nos ayuda a mantenerla :)</p>
                            <p>La manera más fácil de apoyarnos es por yappy. Puedes enviar al +507 66786283 con el mensaje "quiero salir"</p>
                        </b-modal>
                    </div>
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
        background-color: #0074E0;
        color: white;
        padding-top: 50px;
        padding-bottom: 50px;
    }
    h1 {
        padding-bottom: 25px;
    }
    #h3 {
        padding-top: 50px;
        padding-bottom: 50px;
        color: #F79E01;
    }
</style>
