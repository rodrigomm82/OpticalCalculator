<template>
  <calculation-header
    :title=this.title
    :description=this.description
  />

  <calculation-body
    :fields="fields"
  />

    <q-list  class="flex flex-center q-pq-md">
      <q-item>
        <q-btn @click="transpositionCalculate(fields)" label="Calculate" color="primary"/>
      </q-item>
    </q-list>

</template>

<script>
import {ref} from "vue";
import CalculationHeader from "components/CalculationHeader";
import CalculationBody from "components/CalculationBody";

export default {
  name: "Transposition",
  components: {CalculationBody, CalculationHeader},

  methods: {
    transpositionCalculate: function(field) {
      console.time('tempo')
      this.parameterReceipt(field);

      if (this.cylindrical > 0) {
        this.calculationOfTransposition();
        this.sendingParameter(field);
      }
      console.timeEnd('tempo')
    },

    calculationOfTransposition: function () {
      this.spherical += this.cylindrical
      this.cylindrical *= -1

      if (this.axis >= 90) this.axis -= 90
      else this.axis += 90
    },

    parameterReceipt: function (field) {
      this.spherical = field[0].ref.valueOf()
      this.cylindrical = field[1].ref.valueOf()
      this.axis = field[2].ref.valueOf()
    },

    sendingParameter: function (field) {
      this.results = field
      this.results[0].ref = this.spherical
      this.results[1].ref = this.cylindrical
      this.results[2].ref = this.axis
    },
  },

  computed: {  },

  setup () {
    const spherical = ref(0)
    const cylindrical = ref(0)
    const axis = ref(0)

    const fields= ref([
      {
        name: 'Spherical',
        ref: spherical,
        max: 20,
        min: -20,
        step: 0.25,
        color: 'green'
      },
      {
        name: 'Cylindrical',
        ref: cylindrical,
        max: +6,
        min: -6,
        step: 0.25,
        color: 'blue'
      },
      {
        name: 'Axis',
        ref: 0,
        max: 180,
        min: 0,
        step: 1,
        color: 'red'
      }
    ])
    const title= 'Transposition'
    const description= 'Transposition is the change of numbers and signals without changing the diopthic value of the lens.\n' +
    'Every cylindrical lens, combined or toric, has two ways of being read or prescribed. One with the positive\n' +
    'cylindrical and the other with the negative cylindrical.'


    return {
      spherical,
      cylindrical,
      axis,
      fields,
      title,
      description
    }
  }
}
</script>

<style scoped>

</style>
