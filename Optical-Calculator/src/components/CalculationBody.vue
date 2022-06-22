<template>

  <q-form class="flex flex-center q-px-lg">
    <q-item v-model="field.ref"
            v-for="field in fields"
            :key="field.name"
    >
      <q-item-section>
        <q-item-label
          :style="'color:' + field.color" class="control-label q-px-sm"
        >
          {{ field.name }}:
        </q-item-label>
      </q-item-section>
      <q-item-section>
        <input v-model="field.ref" :id="field.name" required
               type="number" :name="field.name" class="col-md-8 form-control"
               :min="field.min" :max="field.max" :step="field.step">
        <span class="validity"/>
      </q-item-section>
    </q-item>
  </q-form>

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
input:invalid+span:after {
  content: '✖';
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}

</style>
