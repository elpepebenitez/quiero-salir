<template>
  <div class="about">
    <h1>Lola y Pepe</h1>
    <div class="b-container">
      <div class="row">
        <div class="col-6">
            <div class="mb-2">
              <b-avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQGfsEIg5G1pGQ/profile-displayphoto-shrink_200_200/0/1589277043248?e=1619049600&v=beta&t=TSTc17AOYZxVAS37UkF1C9JUaG5fynWk5X0zVwMwGa4" size="12rem"></b-avatar>
            </div>
            <div class="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam recusandae eaque pariatur quisquam error veniam, non aspernatur incidunt. Illum, fugit enim? Facilis, corporis! Perspiciatis dolorum rem mollitia, explicabo voluptatibus consequatur.</p>
            </div>
            <div class="links">
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div class="col-6">
            <div class="mb-2">
              <b-avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHQufX9dh4RpA/profile-displayphoto-shrink_200_200/0/1595870368070?e=1619049600&v=beta&t=kx1iHsTzZN7V-eup8wXcNsu7ZLRHfX2kcTUIu6jJDYY" size="12rem"></b-avatar>
            </div>
            <div class="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laudantium autem eaque repellat voluptates impedit. Tenetur expedita, veritatis, consectetur vero dicta provident ad aliquid vel repellat possimus, accusantium quas fugiat.</p>
            </div>
            <div class="links">
              <a href="#"><i class="fab fa-github"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>
      </div>
    </div>
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

.links {
  display: flex;
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
}
</style>