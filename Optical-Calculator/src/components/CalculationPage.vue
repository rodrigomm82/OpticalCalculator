<template>

  <calculation-header :title="title" :description="description"/>

    <q-card class="q-mx-xl q-py-md" bordered>

      <calculation-body :fields="fields"/>

      <q-list class="flex flex-center q-pq-md">
        <q-img
          :alt="title" :ratio="4/3"
          :src="require('../assets/' + image)"
          class="image-web q-mx-lg mobile-hide"
        />
        <q-img
          :alt="title" :ratio="4/3"
          :src="require('../assets/' + image)"
          class="image-mobile q-mx-lg mobile-only"
        />
        <q-item>
          <q-btn v-if="btnValidity > 0" disable :label="$t('calculate')" color="primary"/>
          <q-btn v-else @click="calculationButton(fields)" :label="$t('calculate')" color="primary"/>
          <q-tooltip class="mobile-only" :hide-delay="delay">Se algum dos elementos apresentar '✖', não será permitido calcular!</q-tooltip>
          <q-tooltip class="mobile-hide">Se algum dos elementos apresentar '✖', não será permitido calcular!</q-tooltip>
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
import DateMixin from 'src/mixins/DateMixin'
import LogMixin from 'src/mixins/LogMixin'

export default {
  name: "CalculationPage",

  components: {
    CalculationResult,
    CalculationBody,
    CalculationHeader,
  },

  mixins: [DateMixin, LogMixin],

  props: {
      title: String,
      description: String,
      fields: Object,
      image: String
  },

  computed: {
    // Método que valida constantemente o botão que aciona os cálculos
    btnValidity: function () {
      let count = 0
      this.fields.forEach(function (f) {
        if (f.ref % f.step !== 0 || f.ref > f.max || f.ref < f.min) count++
      })
      return count
    }
  },

  methods: {
    // Função acionada pelo botão
    calculationButton: function (field) {
      this.parameterReceipt(field)
      if (this.title === this.$t('transposition')) this.transpositionCalculate(field)
      if (this.title === this.$t('addition')) this.additionCalculate()
      if (this.title === this.$t('near')) this.nearCalculate()
      if (this.title === this.$t('diameter')) this.diameterCalculate()
    },

    // função que verifica se é necessário calcular a transposição
    transpositionCalculate: function(field) {
      if (this.cylindrical > 0) {
        console.log(this.formatMoment() + ' => Cálculo de Transposição:{' +
        this.transpositionLog('Prescrito:', field) +
        this.calculationOfTransposition() +
        this.parameterSending(field) +
        this.transpositionLog(', Transposto:', field) + '}');
      }
    },

    // Cálculo da adição
    additionCalculate() {
      this.addition = (this.near - this.spherical)
      console.log(this.formatMoment() + ' => Cálculo de Adição:' + this.additionLog())
    },

    // Cálculo da dioptria de perto
    nearCalculate: function () {
      this.near = (this.addition + this.spherical)
      console.log(this.formatMoment() + ' => Cálculo de Perto:' + this.nearLog())
    },

    // Cálculo de diâmetro da lente
    diameterCalculate: function () {
      let tolerance = 2;
      this.diameter = (((this.bridge + this.width + this.largeDiagonal)
        - (this.nasoPupillaryDistance * 2)) + tolerance)
      console.log(this.formatMoment() + ' => Cálculo de Diâmetro:' + this.diameterLog())
    },

    // Recebimento de parâmetros da função
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

    // Envio de parâmetros para função
    parameterSending: function (field) {
      field[0].ref = this.spherical
      field[1].ref = this.cylindrical
      field[2].ref = this.axis
      return ''
    },

    // Cálculo da transposição de dioptrias, caso o cilíndrico for positivo
    calculationOfTransposition: function () {
      this.spherical += this.cylindrical
      this.cylindrical *= -1

      if (this.axis >= 90) this.axis -= 90
      else this.axis += 90
      return ''
    },

  },

  setup () {
    const spherical = ref()
    const cylindrical = ref()
    const axis = ref(0)
    const near = ref(0)
    const addition = ref(0)
    const width = ref(0)
    const largeDiagonal = ref()
    const bridge = ref(0)
    const nasoPupillaryDistance = ref(0)
    const diameter = ref(0)
    const delay= 1000

    return {
      spherical, cylindrical, axis, near, addition ,width, largeDiagonal, bridge, nasoPupillaryDistance, diameter, delay
    }
  }
}
</script>

<style scoped>
.image-web {max-height:40vh; max-width: 30vw;}
.image-mobile {max-height:80vh; max-width: 60vw;}

</style>
