<template>
  <div class="home">
    <Banner />
    <Restrictions />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import Restrictions from '@/components/home/Restrictions.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Restrictions,
  }
}
</script>