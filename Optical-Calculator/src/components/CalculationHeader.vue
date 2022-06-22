<template>
  <h4 class="q-mb-lg flex flex-center">
    {{ this.title }}
  </h4>
  <p class="q-ma-lg q-px-lg flex flex-center" style="text-align: justify">
    {{ this.description }}
  </p>
</template>

<script>
export default {
  name: "CalculationHeader",

  props: {
    title: String,
    description: String
  }
}
</script>

<style scoped>

</style>
