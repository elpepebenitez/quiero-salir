<template>
    <div>
        <div>
            <h1>Conoce qué restricciones de movilidad están vigentes en Panamá</h1>
            <p>Nos parecía increible que NO existiese, después de tanto tiempo, un lugar donde encontrar información actualizada sobres las restricciones de movilidad por COVID</p>
            <p>Así que YOLO, lo hicimos <router-link to="/nosotros">nosotros</router-link>  mismos</p>
        </div>
        <div>
            <h2>¿Qué puedes y qué no puedes hacer?</h2>
            <p>De la telaraña de Decretos y Resolucions recogimos la última <router-link to="/normativa">normativa</router-link> para poder resumir las restricciones que se aplican actualmente</p>
            <p>Actualizado al 16 de febrero de 2021</p>
            <div class="container">
                <div class="nacional">
                    <h3>A nivel nacional</h3>
                </div>
                <div class="row">
                    <div class="col">
                        <h3>Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h3>
                    </div>
                    <div class="col">
                        <h3>Otras provincias</h3>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h2>Actividades Abiertas Fuera de Cuarentena</h2>
                <p>Estas son las actividades que se han abierto, pero sólo se pueden realizar fuera del periodo de cuarentena y toque de queda</p>
            </div>
            <div>
                <h2>Actividades Excentas de Restricciones</h2>
                <p>Estas son las actividades que pueden operar aun en periodo de cuarentena y toque de queda</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Banner',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
