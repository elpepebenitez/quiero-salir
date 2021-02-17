<template>
    <div class="main-info">
        <b-container>
            <h2>¿Qué puedes y qué no puedes hacer?</h2>
            <p>De la telaraña de Decretos y Resolucions recogimos la última <b-button variant="outline-primary" size="sm" href="/normativa">normativa</b-button> para poder resumir las restricciones que se aplican actualmente</p>
            <p>Actualizado al 16 de febrero de 2021</p>
            <b-row>
                <b-col col id="fila">
                    <h3>A nivel nacional</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis amet voluptates iure nihil maiores dignissimos labore quas, quam autem temporibus dolorum, eos itaque veritatis accusamus modi minima! Labore, dolorum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis amet voluptates iure nihil maiores dignissimos labore quas, quam autem temporibus dolorum, eos itaque veritatis accusamus modi minima! Labore, dolorum.</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col col id="fila">
                    <h4>Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis amet voluptates iure nihil maiores dignissimos labore quas, quam autem temporibus dolorum, eos itaque veritatis accusamus modi minima! Labore, dolorum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis amet voluptates iure nihil maiores dignissimos labore quas, quam autem temporibus dolorum, eos itaque veritatis accusamus modi minima! Labore, dolorum.</p>
                </b-col>
            </b-row>
        </b-container>
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
        padding-top: 40px;
        border-bottom: 1px solid #027BFF; 
    }
    #fila {
        border: 1px solid #027BFF; 
    }
</style>
