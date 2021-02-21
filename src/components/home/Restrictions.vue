<template>
    <div class="main-info">
        <b-container>
            <h2>Restricciones</h2> 
            <h6>Actualizado al 21 de febrero de 2021 acorde a la <b-button variant="outline-primary" size="sm" href="/normativa">normativa</b-button> vigente</h6>
            <b-row>
                <b-col id="fila-general">
                    <h3>Prohibiciones Generales</h3>
                    <h5>No están permitidas reuniones o celebraciones entre personas que no convivan en la misma residencia</h5>
                    <h5>Se prohíben actividad que comprenda celebraciones festivas o reuniones en botes, yates o similares, domicilio particulares, complejos o torres habitacionales, propiedades sujetas o no a Régimen de Propiedad Horizontal, y sus áreas comunes o sociales, incluyendo hoteles, complejos residenciales, complejos de playa o de campo que sean privados, con excepción de las reuniones que se realicen dentro de la burbuja del hogar, siempre que no supere 10 personas.</h5>
                    <h5>Se prohíben actividades que conlleve aglomeraciones en lugares públicos, comerciales y de cualquier índole. Reuniones laborales hasta un máximo de 25 personas, cumpliendo con distanciamiento mínimo de dos metros y demás medidas de bioseguridad.</h5>
                    <h5 id="fundamento">Fundamento: Artículos 14, 15 y 16 del Decreto Ejecutivo 62 de 2021</h5>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row>
                <b-col id="fila-nacional">
                    <h3>A Nivel Nacional</h3>
                    <h5>Toque de queda en territorio nacional de lunes a viernes de 10pm a 4am</h5>
                    <h5>Horario de operación de establecimientos comerciales a nivel nacional hasta las 9 pm</h5>
                    <h5>Apertura al público a nivel nacional de restaurantes hasta las 9pm. Con siguientes limitaciones:</h5>

                    <p>Venta de licor sólo con comida</p>
                    <p>Uso obligatorio de mascarilla y pantalla facial por parte del personal de atención al cliente</p>
                    <p>Distancia mínima de dos metros</p>
                    <p>Restaurantes deben cumplir con lineamientos de bioseguridad en Resolución 405 de 2020 y 1350 de 2020</p>

                    <h5>Se levanta cerco sanitario de Panamá y Panamá Oeste. Se mantienen puestos de control en:</h5>
                    <p>Provincia de Panamá: Garita de la Policía Nacional en Chepo</p>
                    <p>Provincia de Panamá Oeste: El Balneario El Lago, en Capira</p>
                    <p>Provincia de Herrera: Sector de Divisa</p>
                    <p>Provincia de Los Santos: Distrito La Villa</p>
                    <p>Provincia de Colón: Sector Chagres</p>
                    <p>Provincia de Chiriquí: Sector Viguí</p>                     

                    <h5>Los establecimientos deberán mantener un aforo del 50% de su capacidad incluyendo sus empleados.</h5>
                    <h5>Acceso a playas, ríos y balnearios de 6am a 5pm. Con siguientes limitaciones:</h5>
                    <p>Prohibida venta y consumo de alcohol</p>
                    <p>Prohibidos paseos</p>
                    <p>Cumplir con lineamientos de bioseguridad en Resolución 405 de 2020 y 1260 de 2020</p>
                    <h5>Uso de áreas sociales y piscinas de los PH, barriadas y residenciales, con un aforo del 25% de su capacidad y manteniendo burbuja del hogar.</h5>
                    <h5 id="fundamento">Fundamento: Artículos 1, 2, 6, 7, 8, 9, 10 y 13 del Decreto Ejecutivo 74 de 2021 y Artículos 1, 2, 3 y del Decreto Ejecutivo 71 de 2021</h5>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col id="fila-provincias">
                    <h3>Provincias de Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h3>
                    <h5>Cuarentena total los fines de semana de viernes 10pm a lunes 4am</h5>
                    <h5>Se prohíbe durante días de cuarentena total el acceso y uso a parques, plazas, estadios, gimnasios y áreas abiertas, así como playas, ríos y balnearios públicos</h5>
                    <h5>Acceso a playas, ríos y balnearios de lunes a viernes de 6am a 5pm</h5>
                    <h5 id="fundamento">Fundamento: Artículos 3 y 10 del Decreto Ejecutivo 74 de 2021</h5>
                </b-col>
            </b-row>
            <b-row>
                <b-col id="fila-visitantes">
                    <h3>Visitantes a Panamá</h3>
                    <h5>Certificados de prueba PCR o antígeno con resultado negativo o no detectado para COVID-19, con un máximo de 48 horas previo a la entrada al país</h5>
                    <h5>Obligación de hacerse una prueba rápida de hisopado/PCR o antígeno, previo a su registro en migración las personas nacionales, residentes o extranjeras a su llegada al país</h5>
                    <h5>Pruebas aleatorias de hisopado/PCR o antígeno para el diagnóstico de COVID-19 a todo viajero en los puntos de ingreso al territorio nacional</h5>
                    <h5>Se exceptúa la gente de mar, tripulaciones técnicas, las tripulaciones auxiliares, mecánicos de naves o embarcaciones y el personal humanitario. Deberán presentar cada 15 días su prueba de hisopado/PCR con resultado negativo</h5>
                    <h5 id="fundamento">Fundamento: Artículos 2, 3, 4 y 5 del Decreto Ejecutivo 61 de 2021</h5>
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
    }
    h2 {
        color: #F79E01;
    }
    p {
       color: #0074E0;
       font-size: 20x;
    }
    h3 {
        padding-top: 16px;
    }
    #fundamento {
        color: #0074E0;
    }
</style>
