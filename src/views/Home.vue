<template>
  <div class="home">
    <Banner />
    <Restrictions />
    <OpenActivities />
    <ExemptActivities />
    <Travellers />

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import Restrictions from '@/components/home/Restrictions.vue'
import OpenActivities from '@/components/home/OpenActivities.vue'
import ExemptActivities from '@/components/home/ExemptActivities.vue'
import Travellers from '@/components/home/Travellers.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Restrictions,
    OpenActivities,
    ExemptActivities,
    Travellers
  }
}
</script>

    Restrictions