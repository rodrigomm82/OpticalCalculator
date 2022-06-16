<template>
  <h4 class="q-px-lg flex flex-center">
    {{ this.title }}
  </h4>
  <p class="q-px-lg flex flex-center">
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
