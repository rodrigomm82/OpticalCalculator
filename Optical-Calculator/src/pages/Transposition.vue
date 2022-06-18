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
  name: "Transposition",

  components: {CalculationPage},

  setup () {
    const fields= ref([
      {name: 'Spherical', ref: 0, max: 20, min: -20, step: 0.25, color: 'green'},
      {name: 'Cylindrical',  ref: 0, max: +6, min: -6, step: 0.25,  color: 'blue'},
      {name: 'Axis', ref: 0, max: 180, min: 0, step: 1, color: 'red'}
    ])

    const title= 'Transposition'
    const description= 'Transposition is the change of numbers and signals without changing the diopthic value of the lens.\n' +
    'Every cylindrical lens, combined or toric, has two ways of being read or prescribed. One with the positive\n' +
    'cylindrical and the other with the negative cylindrical.'

    return {
      fields, title, description
    }
  }
}
</script>

<style scoped>
</style>
