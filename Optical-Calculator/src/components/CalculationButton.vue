<template>
  <q-list class="flex flex-center q-pq-md">
    <q-item>
      <q-btn @click.once="functionButton" label="Calculate" color="primary"/>
    </q-item>
  </q-list>
</template>
<script>
export default {
  name: 'CalculationButton',

  props: {
    buttonFunction: Function,
    fields: [Object, String]
  },

  methods: {
    functionButton: function() {
      this.buttonFunction(this.fields)
    }
  }

}
</script>
