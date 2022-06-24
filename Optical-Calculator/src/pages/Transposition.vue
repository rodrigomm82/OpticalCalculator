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
  name: "Transposition",

  components: {CalculationPage},

  data () {
    return {
    fields: [
      {name: this.$t('spherical'), ref: 0, max: 20, min: -20, step: 0.25, color: 'green'},
      {name: this.$t('cylindrical'),  ref: 0, max: +6, min: -6, step: 0.25,  color: 'blue'},
      {name: this.$t('axis'), ref: 0, max: 180, min: 0, step: 1, color: 'red'}
    ],

    title: this.$t('transposition'),
    description: this.$t('transpositionDescription'),
    image: 'transposition.png'

    }
  }
}
</script>

<style scoped>
</style>
