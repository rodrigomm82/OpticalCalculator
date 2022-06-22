<template>
  <calculation-page
    :title="title"
    :description="description"
    :fields="fields"
  />
</template>

<script>
import CalculationPage from 'components/CalculationPage'
export default {
    name: 'Diameter',

  components: {CalculationPage},

  data() {
    return {
      fields: [
        {name: this.$t('width'), ref: 10, max: 80,  min: 10, step: 1, color: 'green'},
        {name: this.$t('largeDiagonal'), ref: 10, max: 80,  min: 10, step: 1, color: 'red'},
        {name: this.$t('bridge'), ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
        {name: this.$t('nasoPupillaryDistance'), ref: 5, max: 80,  min: 5, step: 1, color: 'gray'}
      ],

      title: this.$t('diameter'),
      description: ''
    }
  },
}
</script>

<style scoped>

</style>
