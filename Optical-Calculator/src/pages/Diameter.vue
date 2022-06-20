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
      {name: 'Spherical', ref: 0, max: 20,  min: -20, step: 0.25, color: 'green'},
      {name: 'Cylindrical', ref: 0,  max: 0, min: -6, step: 0.25, color: 'blue'},
      {name: 'Axis', ref: 0, max: 180, min: 0, step: 1, color: 'red'},
      {name: 'Addition', ref: 0.25, max: 6, min: 0.25, step: 0.25, color: 'orange'}
    ])

    /*const fields = [
      {
        eye: [
          {
            name:'Right Eye',
            elements: [
              {name: 'Width', ref: 10, max: 80,  min: 10, step: 1, color: 'green'},
              {name: 'Height', ref: 10, max: 80,  min: 10, step: 1, color: 'blue'},
              {name: 'Large Diagonal', ref: 10, max: 80,  min: 10, step: 1, color: 'red'},
              {name: 'Bridge', ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
              {name: 'Naso Pupillary Distance', ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
            ]
          },
          {
            name:'Left Eye',
            elements: [
              {name: 'Width', ref: 10, max: 80,  min: 10, step: 1, color: 'green'},
              {name: 'Height', ref: 10, max: 80,  min: 10, step: 1, color: 'blue'},
              {name: 'Large Diagonal', ref: 10, max: 80,  min: 10, step: 1, color: 'red'},
              {name: 'Bridge', ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
              {name: 'Naso Pupillary Distance', ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
            ]
          }

        ]
      },
    ]*/
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
