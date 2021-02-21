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
                  <p>Si tienes alguna sugerencia para mejorar el contenido déjanoslo saber <b-button href="https://wa.me/50766786283" variant="success" size="sm" target="_blank" style="color: white; font-weight: 900; display: inline;"><i class="fab fa-whatsapp"></i></b-button>  </p>
                  <p>También agradecemos cualquier contribución para mantener esta página</p>
                  <b-button v-b-modal.modal-center variant="warning" size="lg" id="dona" style="color: white; font-weight: 900;">Apóyanos</b-button>

                </b-col>
              </b-row>
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
    text-align: justify;
    text-justify: inter-word;
  }
</style>