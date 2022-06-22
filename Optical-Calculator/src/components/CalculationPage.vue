<template>

  <calculation-header :title="title" :description="description"/>

    <q-card class="q-mx-xl q-py-md" bordered>

      <calculation-body :fields="fields"/>

      <q-list class="flex flex-center q-pq-md">
        <q-item>
          <q-btn v-if="btnValidity > 0" disable :label="$t('calculate')" color="primary"/>
          <q-btn v-else @click="calculationButton(fields)" :label="$t('calculate')" color="primary"/>
        </q-item>

        <div v-if="title !== this.$t('transposition')">
          <calculation-result
            v-if="title !== this.$t('diameter')"
            :title="title"
            :field="title === this.$t('addition')? this.addition : this.near"
          />
          <calculation-result
            v-else
            :title="title"
            :field=this.diameter
          />
        </div>
      </q-list>
    </q-card>
</template>

<script>
import {ref} from 'vue'
import CalculationHeader from 'components/CalculationHeader'
import CalculationBody from 'components/CalculationBody'
import CalculationResult from 'components/CalculationResult'

let tolerance = 2;
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

  computed: {
    btnValidity: function () {
      let count = 0
      this.fields.forEach(function (f) {
        if (f.ref % f.step !== 0 || f.ref > f.max || f.ref < f.min) count++
      })
      return count
    }
  },

  methods: {
    calculationButton: function (field) {
      this.parameterReceipt(field)

      if (this.title === this.$t('transposition')) this.transpositionCalculate(field)
      if (this.title === this.$t('addition')) this.additionCalculate()
      if (this.title === this.$t('near')) this.nearCalculate()
      if (this.title === this.$t('diameter')) this.diameterCalculate()
    },

    transpositionCalculate: function(field) {
      if (this.cylindrical > 0) {
        this.calculationOfTransposition()
        this.sendingParameter(field)
      }
    },

    additionCalculate() {
      this.addition = (this.near - this.spherical)
    },

    nearCalculate: function () {
      this.near = (this.addition + this.spherical)
    },

    diameterCalculate: function () {
      this.diameter = (((this.bridge + this.width + this.largeDiagonal)
        - (this.nasoPupillaryDistance * 2)) + tolerance)
      console.log(this.$t('diameter') + ' ' + this.diameter)
    },

    parameterReceipt: function (field) {
      if(this.title !== this.$t('diameter')){
        this.spherical = field[0].ref.valueOf()
        this.cylindrical = field[1].ref.valueOf()
        this.axis = field[2].ref.valueOf()

        if (this.title === this.$t('addition')) this.near = field[3].ref.valueOf()
        if (this.title === this.$t('near')) this.addition = field[3].ref.valueOf()
      } else {
        this.width = field[0].ref.valueOf()
        this.largeDiagonal = field[1].ref.valueOf()
        this.bridge = field[2].ref.valueOf()
        this.nasoPupillaryDistance = field[3].ref.valueOf()
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
    },
  },

  setup () {
    const spherical = ref(0)
    const cylindrical = ref(0)
    const axis = ref(0)
    const near = ref(0)
    const addition = ref(0)
    const width = ref(0)
    const largeDiagonal = ref(0)
    const bridge = ref(0)
    const nasoPupillaryDistance = ref(0)
    const diameter = ref(0)

    return {
      spherical, cylindrical, axis, near, addition ,width, largeDiagonal, bridge, nasoPupillaryDistance, diameter
    }
  }
}
</script>

<style scoped>

</style>
