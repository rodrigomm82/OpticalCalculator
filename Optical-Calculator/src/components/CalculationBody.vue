<template>

  <q-page-container class="flex flex-right q-px-lg">
    <q-item v-model="field.ref"
            v-for="field in fields"
            :key="field.name"
    >
      <q-item-section>
        <q-item-label
          :style="'color:' + field.color" class="control-label"
        >
          {{ field.name }}:
        </q-item-label>
      </q-item-section>

      <q-item-section>
        <input v-model="field.ref" :id="field.name"
               type="number" :name="field.name" class="col-md-8 form-control"
               :min="field.min" :max="field.max" :step="field.step">
      </q-item-section>
    </q-item>
  </q-page-container>

</template>

<script>
export default {
  name: "CalculationBody",

  props: {
    fields: [Object, String]
  }
}
</script>

<style scoped>

</style>
