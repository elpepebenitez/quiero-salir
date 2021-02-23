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
                  <p>Tomen lo que aparece en esta página como una guía básica</p> 
                  <p>Para dudas específicas sobre su situación por favor consulten con un profesional idóneo</p>

                </b-col>
                <b-col>
                  <p>Si tienes sugerencias déjanoslo saber <b-button href="https://wa.me/50766786283" variant="success" size="sm" target="_blank" style="color: white; font-weight: 900; display: inline;"><i class="fab fa-whatsapp"></i></b-button>  </p>
                  <p>Agradecemos cualquier contribución para mantener esta página</p>
                  <b-button v-b-modal.modal-footer variant="warning" size="lg" id="dona" style="color: white; font-weight: 900;">Apóyanos</b-button>
                </b-col>
              </b-row>
            </b-container>
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->

      <div>
          <b-modal id="modal-footer" title="¡Hola!" ok-only centered>
              <p class="my-4">No nos tienes que dar nada por usar esta página, pero cualquier aporte nos ayuda a mantenerla :)</p>
              <p>La manera más fácil de apoyarnos es por yappy. Puedes enviar al +507 66786283 con el mensaje "quiero salir"</p>
          </b-modal>
      </div>


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
    text-align: left;
  }
</style>