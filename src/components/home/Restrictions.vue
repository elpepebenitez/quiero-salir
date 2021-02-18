<template>
    <div class="main-info">
        <b-container>
            <h2>Restricciones</h2> 
            <p>Actualizado al 18 de febrero de 2021</p>
            <p>Acorde a la <b-button variant="outline-primary" size="sm" href="/normativa">normativa</b-button> vigente</p>
            <b-row>
                <b-col col id="fila">
                    <h3>Prohibiciones Generales</h3>
                    <p>No están permitidas reuniones o celebraciones entre personas que no convivan en la misma residencia</p>
                    <p>Se prohíben actividad que comprenda celebraciones festivas o reuniones en botes, yates o similares, domicilio particulares, complejos o torres habitacionales, propiedades sujetas o no a Régimen de Propiedad Horizontal, y sus áreas comunes o sociales, incluyendo hoteles, complejos residenciales, complejos de playa o de campo que sean privados, con excepción de las reuniones que se realicen dentro de la burbuja del hogar, siempre que no supere 10 personas.</p>
                    <p>Se prohíben actividades que conlleve aglomeraciones en lugares públicos, comerciales y de cualquier índole. Reuniones laborales hasta un máximo de 25 personas, cumpliendo con distanciamiento mínimo de dos metros y demás medidas de bioseguridad.</p>
                    <p>Fundamento: Artículos 14, 15 y 16 del Decreto Ejecutivo 62 de 2021</p>
                </b-col>
            </b-row>            
            <b-row>
                <b-col col id="fila">
                    <h3>A Nivel Nacional</h3>
                    <p>Toque de queda en territorio nacional de lunes a viernes de 10pm a 4am</p>
                    <p>Horario de operación de establecimientos comerciales a nivel nacional hasta las 9 pm</p>
                    <p>Apertura al público a nivel nacional de restaurantes hasta las 9pm. Con siguientes limitaciones:</p>
                    <ul>
                        <li>Venta de licor sólo con comida</li>
                        <li>Uso obligatorio de mascarilla y pantalla facial por parte del personal de atención al cliente</li>
                        <li>Distancia mínima de dos metros</li>
                        <li>Restaurantes deben cumplir con lineamientos de bioseguridad en Resolución 405 de 2020 y 1350 de 2020</li>
                    </ul>
                    <p>Se levanta cerco sanitario de Panamá y Panamá Oeste. Se mantienen puestos de control en:</p>
                    <ul>
                        <li>Provincia de Panamá: Garita de la Policía Nacional en Chepo</li>
                        <li>Provincia de Panamá Oeste: El Balneario El Lago, en Capira</li>
                        <li>Provincia de Herrera: Sector de Divisa</li>
                        <li>Provincia de Los Santos: Distrito La Villa</li>
                        <li>Provincia de Colón: Sector Chagres</li>
                        <li>Provincia de Chiriquí: Sector Viguí</li>                     
                    </ul>

                    <p>Los establecimientos deberán mantener un aforo del 50% de su capacidad incluyendo sus empleados.</p>
                    <p>Acceso a playas, ríos y balnearios de 6am a 5pm. Con siguientes limitaciones:</p>
                    <ul>
                        <li>Prohibida venta y consumo de alcohol</li>
                        <li>Prohibidos paseos</li>
                        <li>Cumplir con lineamientos de bioseguridad en Resolución 405 de 2020 y 1260 de 2020</li>
                    </ul>
                    <p>Uso de áreas sociales y piscinas de los PH, barriadas y residenciales, con un aforo del 25% de su capacidad y manteniendo burbuja del hogar.</p>
                    <p>Fundamento: Artículos 1, 2, 6, 7, 8, 9, 10 y 13 del Decreto Ejecutivo 74 de 2021 y Artículos 1, 2, 3 y del Decreto Ejecutivo 71 de 2021</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col col id="fila">
                    <h4>Provincias de Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h4>
                    <p>Cuarentena total los fines de semana de viernes 10pm a lunes 4am</p>
                    <p>Se prohíbe durante días de cuarentena total el acceso y uso a parques, plazas, estadios, gimnasios y áreas abiertas, así como playas, ríos y balnearios públicos</p>
                    <p>Acceso a playas, ríos y balnearios de lunes a viernes de 6am a 5pm</p>
                    <p>Fundamento: Artículos 3 y 10 del Decreto Ejecutivo 74 de 2021</p>
                </b-col>
            </b-row>
            <b-row>
                <b-col col id="fila">
                    <h3>Visitantes a Panamá</h3>
                    <p>Certificados de prueba PCR o antígeno con resultado negativo o no detectado para COVID-19, con un máximo de 48 horas previo a la entrada al país</p>
                    <p>Obligación de hacerse una prueba rápida de hisopado/PCR o antígeno, previo a su registro en migración las personas nacionales, residentes o extranjeras a su llegada al país</p>
                    <p>Pruebas aleatorias de hisopado/PCR o antígeno para el diagnóstico de COVID-19 a todo viajero en los puntos de ingreso al territorio nacional</p>
                    <p>Se exceptúa la gente de mar, tripulaciones técnicas, las tripulaciones auxiliares, mecánicos de naves o embarcaciones y el personal humanitario. Deberán presentar cada 15 días su prueba de hisopado/PCR con resultado negativo</p>
                    <p>Fundamento: Artículos 2, 3, 4 y 5 del Decreto Ejecutivo 61 de 2021</p>
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
