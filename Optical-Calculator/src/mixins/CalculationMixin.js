export default {
  methods: {
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

    // Cálculo da transposição de dioptrias, caso o cilíndrico for positivo
    calculationOfTransposition: function () {
      this.spherical += this.cylindrical
      this.cylindrical *= -1

      if (this.axis >= 90) this.axis -= 90
      else this.axis += 90
      return ''
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
  }
}
