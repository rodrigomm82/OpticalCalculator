<template>

  <calculation-header :title="title" :description="description"/>

  <calculation-body :fields="fields"/>

  <q-list  class="flex flex-center q-pq-md">
    <q-item>
      <q-btn @click="calculationButton(fields)" label="Calculate" color="primary"/>
    </q-item>

    <calculation-result
      :title="title"
      :field="title === 'Addition'? this.addition : this.near"
    />
  </q-list>

</template>

<script>
import {ref} from 'vue'
import CalculationHeader from 'components/CalculationHeader'
import CalculationBody from 'components/CalculationBody'
import CalculationResult from 'components/CalculationResult'

export default {
  name: "CalculationPage",

  components: {
    CalculationResult,
    CalculationBody,
    CalculationHeader,
  },

  props: {
    title: String,
    description: String,
    fields: Object
  },

  methods: {
    calculationButton: function (field) {
      this.parameterReceipt(field)

      if (this.title === 'Transposition') this.transpositionCalculate(field)
      if (this.title === 'Addition') this.additionCalculate()
      if (this.title === 'Near') this.nearCalculate()
    },

    transpositionCalculate: function(field) {
      if (this.cylindrical > 0) {
        this.calculationOfTransposition()
        this.sendingParameter(field)
      }
    },

    parameterReceipt: function (field) {
      this.spherical = field[0].ref.valueOf()
      this.cylindrical = field[1].ref.valueOf()
      this.axis = field[2].ref.valueOf()

      if (this.title === 'Addition') this.near = field[3].ref.valueOf()
      if (this.title === 'Near') this.addition = field[3].ref.valueOf()
    },

    sendingParameter: function (field) {
      field[0].ref = this.spherical
      field[1].ref = this.cylindrical
      field[2].ref = this.axis
    },

    calculationOfTransposition: function () {
      this.spherical += this.cylindrical
      this.cylindrical *= -1

      if (this.axis >= 90) this.axis -= 90
      else this.axis += 90
    },

    additionCalculate() {
      this.addition = (this.near - this.spherical)
    },

    nearCalculate: function () {
      this.near = (this.addition + this.spherical)
    }
  },

  setup () {
    const spherical = ref(0)
    const cylindrical = ref(0)
    const axis = ref(0)
    const near = ref(0)
    const addition = ref(0)

    return {
      spherical, cylindrical, axis, near, addition
    }
  }
}
</script>

<style scoped>

</style>
