<template>
  <div class="actividades">
    <h1>Actividades que se pueden realizar</h1>
    <OpenActivities />
    <ExemptActivities />
  </div>
</template>

<script>
import OpenActivities from '@/components/home/OpenActivities.vue'
import ExemptActivities from '@/components/home/ExemptActivities.vue'

export default {
    data() {
        return {}
    },
    name: 'Home',
    components: {
        OpenActivities,
        ExemptActivities,
    }
}
</script>

<style scoped>

</style>