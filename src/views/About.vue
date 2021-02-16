<template>
  <div class="about">
    <h1>Lola y Pepe</h1>
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