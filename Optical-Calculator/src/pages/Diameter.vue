<template>
  <calculation-page
    :title="title"
    :description="description"
    :fields="fields"
  />
</template>

<script>
import CalculationPage from "components/CalculationPage";
import {ref} from "vue";
export default {
    name: "Diameter",

  components: {CalculationPage},

  setup() {
    const fields = ref([
      {name: 'Width', ref: 10, max: 80,  min: 10, step: 1, color: 'green'},
      {name: 'Large Diagonal', ref: 10, max: 80,  min: 10, step: 1, color: 'red'},
      {name: 'Bridge', ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
      {name: 'Naso-Pupillary Distance', ref: 5, max: 80,  min: 5, step: 1, color: 'gray'}
    ])

    const title = 'Diameter'
    const description = ''

    return {
      title, description, fields
    }
  },
}
</script>

<style scoped>

</style>
