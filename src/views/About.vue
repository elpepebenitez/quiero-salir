<template>
    <div class="about">
      <h3>Nos parecía increible que NO existiese, después de tanto tiempo, un lugar donde encontrar información actualizada sobres las restricciones de movilidad por COVID</h3>
      <p>Así que lo hicimos nosotros mismos</p>
      <div class="row">
        <div class="col-6">
            <h2>Lola Arosemena</h2>
            <div class="mb-2">
              <b-avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGfsEIg5G1pGQ/profile-displayphoto-shrink_200_200/0/1589277043248?e=1619049600&v=beta&t=TSTc17AOYZxVAS37UkF1C9JUaG5fynWk5X0zVwMwGa4" size="12rem"></b-avatar>
            </div>
            <div class="description">
              <h4>Activista DDHH / Sostenibilidad del Café</h4>
              <div class="links">
                <a href="https://www.instagram.com/cafecontialola/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/cafecontialola" target="_blank"><i class="fab fa-twitter"></i></a>
              </div>
              <p>Feminista queer que lucha por la justicia social y tripea la guilla del café sostenible</p>
            </div>
        </div>
        <div class="col-6">
            <h2>Pepe Benítez</h2>
            <div class="mb-2">
              <b-avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHQufX9dh4RpA/profile-displayphoto-shrink_200_200/0/1595870368070?e=1619049600&v=beta&t=kx1iHsTzZN7V-eup8wXcNsu7ZLRHfX2kcTUIu6jJDYY" size="12rem"></b-avatar>
            </div>
            <div class="description">
              <h4>Abogado / Desarrollador</h4>
              <div class="links">
                <a href="https://github.com/elpepebenitez" target="_blank"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/elpepebenitez" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/pepebenitez/" target="_blank"><i class="fab fa-linkedin"></i></a>
              </div>
              <p>Co Fundador de <b-button href="https://www.instagram.com/actapanama/?hl=en" variant="outline-primary" size="sm" target="_blank">ACTA Panamá</b-button></p>
              <p>Guillao por el uso de tecnología y desarrollo sostenible</p>
            </div>
        </div>
      </div>
      <h5 style="margin-bottom: 25px; margin-top: 25px;">¡Ambos estamos a la orden para tener una buena conversación siempre!</h5>
    </div>
</template>

<script>
export default {
    data() {
        return {
          nosotros: [{
            nombre: 'Pepe Benítez',
            descripcion: '',
            email: '',
            redes: [{
              linkedin: '',
              instagram: '',
              twitter: '',
              github: ''
            }],
            foto: ''
          },
          {
            nombre: 'Lola Arosemena',
            descripcion: '',
            email: '',
            redes: [{
              linkedin: '',
              instagram: '',
              twitter: '',
              github: ''
            }],
            foto: ''
          }]
        }
    },
}
</script>

<style>
.about {
  padding-top: 40px;
}
.links {
  display: inline;
  align-items: center;
}
.links a {
  color: black;
  opacity: 0.15;
  text-decoration: none;
  font-size: 24px;
  padding: 0px 10px;
}
.links a:hover {
  opacity: 1;
  color: #F79E01;
}
h3 {
  color: #F79E01;
}
</style>