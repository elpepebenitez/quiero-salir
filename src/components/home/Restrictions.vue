<template>
    <div class="main-info">
        <b-container>
            <h2>Restricciones</h2> 
            <h6>Actualizado al 21 de febrero de 2021 acorde a la <b-button variant="outline-primary" size="sm" href="/normativa">normativa</b-button> vigente</h6>
            <b-row>
                <b-col id="fila-general" class="card">
                    <h3>Prohibiciones Generales</h3>
                    <h5>🙅‍♂️ Se prohiben: </h5>
                    <h5>Reuniones o celebraciones entre personas que no convivan en la misma residencia</h5>
                    <h5>Actividades dentro de la burbuja del hogar que superen 10 personas</h5>
                    <h5>Actividades que conlleve aglomeraciones en lugares públicos, comerciales y de cualquier índole</h5>
                    <h5>Reuniones laborales de más de 25 personas</h5>
                    <h6 id="fundamento">Fundamento: Artículos 14, 15 y 16 del Decreto Ejecutivo 62 de 2021</h6>
                </b-col>
            </b-row>
        </b-container>

        <b-container>
            <b-row>
                <b-col id="fila-nacional" class="card">
                    <h3>A Nivel Nacional</h3>
                    <p>Estas son las medidas actuales a nivel Nacional:</p>
                    <h5>Toque de queda en territorio nacional de lunes a viernes de 10pm a 4am</h5>
                    <h5>🛒 Horario de operación de establecimientos comerciales a nivel nacional hasta las 9 pm</h5>
                    <h5>Los establecimientos deberán mantener un aforo del 50% de su capacidad incluyendo sus empleados.</h5>
                    <h5>🍔 Apertura al público de restaurantes hasta las 9pm. Con limitaciones biosanitarias.</h5>
                    <h5>🚔 Se levanta cerco sanitarios, pero se mantienen puestos de control en:</h5>
                    <p>Provincia de Panamá: Garita de la Policía Nacional en Chepo - Provincia de Herrera: Sector de Divisa</p>
                    <p>Provincia de Panamá Oeste: El Balneario El Lago, en Capira - Provincia de Los Santos: Distrito La Villa</p>
                    <p>Provincia de Colón: Sector Chagres - Provincia de Chiriquí: Sector Viguí</p>
                    <h5>🏖 Acceso a playas, ríos y balnearios de 6am a 5pm. Con limitaciones biosanitarias y prohibida venta y consumo de alcohol.</h5>
                    <h5>🏊‍♂️ Uso de áreas sociales y piscinas de los PH, barriadas y residenciales, con un aforo del 25% de su capacidad y manteniendo burbuja del hogar.</h5>
                    <h6 id="fundamento">Fundamento: Artículos 1, 2, 6, 7, 8, 9, 10 y 13 del Decreto Ejecutivo 74 de 2021 y Artículos 1, 2, 3 y del Decreto Ejecutivo 71 de 2021</h6>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col id="fila-provincias" class="card">
                    <h3>Provincias de Panamá, Panamá Oeste, Coclé, Herrera, Los Santos y Veraguas</h3>
                    <p>Estas son las medidas actuales en estas provincias:</p>
                    <h5>Cuarentena total los fines de semana de viernes 10pm a lunes 4am</h5>
                    <h5>Acceso a playas, ríos y balnearios de lunes a viernes de 6am a 5pm</h5>
                    <h6 id="fundamento">Fundamento: Artículos 3 y 10 del Decreto Ejecutivo 74 de 2021</h6>
                </b-col>
            </b-row>
            <b-row>
                <b-col id="fila-visitantes" class="card">
                    <h3>✈️ Visitantes a Panamá</h3>
                    <p>Estas son las medidas que deben cumplir quienes vayan a ingresar al país:</p>
                    <h5>Certificados de prueba PCR o antígeno con resultado negativo, con un máximo de 48 horas previo a la entrada al país</h5>
                    <h5>Si no cuenta con su certificado tendrá que hacerse una prueba rápida de hisopado/PCR o antígeno, previo a su registro en migración</h5>
                    <h5>Pueden haber pruebas aleatorias a todo viajero en los puntos de ingreso al territorio nacional</h5>
                    <h6 id="fundamento">Fundamento: Artículos 2, 3, 4 y 5 del Decreto Ejecutivo 61 de 2021</h6>
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
       text-align: justify;
       text-justify: inter-word;
    }
    h3 {
        padding-top: 16px;
    }
    #fundamento {
        color: #F171A1;
    }
    .card {
          overflow: hidden;
          background: white;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          width: 90%;
          margin: 0 auto;
          margin-bottom: 16px;
          padding: 16px;
          border-radius: 10px;
    }
</style>
