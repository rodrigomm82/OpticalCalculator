<template>

  <calculation-page
    :title="title"
    :description="description"
    :fields="fields"
    :image="image"
  />

</template>

<script>
import CalculationPage from 'components/CalculationPage'

export default {
  name: "Addition",

  components: {CalculationPage},

  data () {

    return {
      fields: [
        {name: this.$t('spherical'), ref: 0, max: 20,  min: -20, step: 0.25, color: 'green'},
        {name: this.$t('cylindrical'), ref: 0,  max: 0, min: -6, step: 0.25, color: 'blue'},
        {name: this.$t('axis'), ref: 0, max: 180, min: 0, step: 1, color: 'red'},
        {name: this.$t('near'), ref: 0, max: 20, min: -20, step: 0.25, color: 'orange'}
      ],

      title: this.$t('addition'),
      description: this.$t('additionDescription'),
      image: 'addition.png'

    }
  }
}
</script>

<style scoped>
</style>
