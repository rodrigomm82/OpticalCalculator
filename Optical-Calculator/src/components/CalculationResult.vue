<template>
  <q-field v-if="this.title === 'Addition' || 'Near'" outlined  stack-label>
    <template v-slot:control>
      <q-item-label>{{ title }}</q-item-label>
      <div class="self-center full-width no-outline" tabindex="0">
        <div >{{ this.field.toFixed(2) }}</div>
      </div>
    </template>
  </q-field>

</template>

<script>
export default {
  name: "CalculationResult",

  props: {
    title: String,
    field: Number
  }
}
</script>

<style scoped>

</style>
