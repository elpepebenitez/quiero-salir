<template>
  <div class="footer">
    <!-- Footer -->
    <footer class="text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
            <b-container>
              <h5 class="text-uppercase">¡Gracias por visitarnos!</h5>
              <b-row>
                <b-col>
                  <p>Las infografías del MINSA son muy útiles, pero recuerda que lo que vale es lo establecido legalmente</p>
                  <p>Tomen lo que aparece en esta página como una guía, pero si tienen dudas específicas sobre su situación por favor consulten con un profesional idóneo</p>

                </b-col>
                <b-col>
                  <p>Si tienes alguna sugerencia para mejorar el contenido déjanoslo saber, y agradecemos cualquier contribución para mantener esta página</p>
                  <b-button v-b-modal.modal-center variant="warning" size="lg" id="dona" style="color: white; font-weight: 900;">Dona</b-button>

                </b-col>
              </b-row>
              
              <!-- 
                Las infografías que van por ahí no son confiables; es importante saber qué es lo último legalmente
                Si necesitan un consejo específico a su situación por favor busquen servicios de un abogado
                Nada de lo que sale en esta página se puede entender como consejo legal, y es posible que no esté 100% completo, quiero darles toda la información posible para que puedan tomar sus propias decisiones
                Déjanos saber si nos falta algo importante
                Buy us a coffee
              -->
            </b-container>
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2021 Copyright:
        <a href="#" style="color: #F79E01;">quierosalir.info</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<style scoped>
  .footer {
    position: relative;
    bottom: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    background-color: #0074E0;
    color: white;
  }
</style>