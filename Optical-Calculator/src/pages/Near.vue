<template>

  <calculation-page
    :title="title"
    :description="description"
    :fields="fields"
  />

</template>

<script>
import { ref } from 'vue'
import CalculationPage from 'components/CalculationPage'

export default {
  name: "Near",

  components: {CalculationPage},

  setup () {
    const fields = ref([
      {name: 'Spherical', ref: 0, max: 20,  min: -20, step: 0.25, color: 'green'},
      {name: 'Cylindrical', ref: 0,  max: 0, min: -6, step: 0.25, color: 'blue'},
      {name: 'Axis', ref: 0, max: 180, min: 0, step: 1, color: 'red'},
      {name: 'Addition', ref: 0.25, max: 6, min: 0.25, step: 0.25, color: 'orange'}
    ])

    const title = 'Near'
    const  description = 'Known as tired vision, presbyopia means that the customer needs different degrees to see' +
      ' correctly. The degree of Near, is what we need to see at approximately 35 cm.'

    return {
      fields, title, description
    }
  }
}
</script>

<style scoped>

</style>
