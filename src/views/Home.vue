<template>
  <div class="home">
    <Banner />
    <Restrictions />
    <OpenActivities />
    <ExemptActivities />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/home/Banner.vue'
import Restrictions from '@/components/home/Restrictions.vue'
import OpenActivities from '@/components/home/OpenActivities.vue'
import ExemptActivities from '@/components/home/ExemptActivities.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    Restrictions,
    OpenActivities,
    ExemptActivities,
  }
}
</script>

    Restrictions