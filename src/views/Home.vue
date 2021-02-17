<template>
  <div class="home">
    <Banner />
    <Restrictions />
    <Activities />
    <Travellers />

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import Restrictions from '@/components/home/Restrictions.vue'
import Activities from '@/components/home/Activities.vue'
import Travellers from '@/components/home/Travellers.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Restrictions,
    Activities,
    Travellers
  }
}
</script>

    Restrictions