<template>

  <calculation-header :title="title" :description="description"/>

  <calculation-body :fields="fields" :image="image" :title="title"/>

</template>

<script>
import CalculationHeader from 'components/CalculationHeader'
import CalculationBody from 'components/CalculationBody'

export default {
  name: "CalculationPage",

  components: {
    CalculationBody,
    CalculationHeader,
  },

  props: {
      title: String,
      description: String,
      fields: Object,
      image: String
  }
}
</script>

<style scoped/>
