<template>

  <calculation-header :title="title" :description="description"/>

  <calculation-body :fields="fields"/>

  <q-list  class="flex flex-center q-pq-md">
    <q-item>
      <q-btn @click="calculationButton(fields)" label="Calculate" color="primary"/>
    </q-item>

    <q-field v-if="this.title === 'Addition'" outlined  stack-label>
      <template v-slot:control>
        <q-item-label>{{ title }}</q-item-label>
        <div class="self-center full-width no-outline" tabindex="0">
          {{ this.addition.toFixed(2) }}
        </div>
      </template>
    </q-field>
  </q-list>

</template>

<script>
import {ref} from 'vue'
  import CalculationHeader from "components/CalculationHeader";
  import CalculationBody from "components/CalculationBody";

export default {
  name: "CalculationPage",

  components: {
    CalculationBody,
    CalculationHeader
  },

  props: {
    title: String,
    description: String,
    fields: Object
  },

  methods: {
    calculationButton: function (field) {
      console.log("iniciou")

      if (this.title === 'Transposition') {
        console.log("transposição")
        this.transpositionCalculate(field)
      }
      if (this.title === 'Addition') {
        console.log("addition")
        this.additionCalculate(field)
      }
    },

    transpositionCalculate: function(field) {
      console.time('tempo')
      this.parameterReceipt(field);

      if (this.cylindrical > 0) {
        this.calculationOfTransposition()
        this.sendingParameter(field)
        console.log('terminou')
      }
      console.timeEnd('tempo')
    },

    parameterReceipt: function (field) {
      this.spherical = field[0].ref.valueOf()
      this.cylindrical = field[1].ref.valueOf()
      this.axis = field[2].ref.valueOf()

      if (this.title === 'Addition') {
        this.near = field[3].ref.valueOf()
      }
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

      console.log('calculou')
      console.log(this.spherical)
      console.log(this.cylindrical)
      console.log(this.axis)
    },


    additionCalculate(field) {
      this.parameterReceipt(field);
      this.calculationOfAddition();
      console.log('Adição: ' + this.addition)
      console.log('Perto: ' + this.near)
      console.log('Longe: ' + this.spherical)
    },

    calculationOfAddition: function () {
      console.log('calculou')
      this.addition = (this.near - this.spherical)
    },

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
