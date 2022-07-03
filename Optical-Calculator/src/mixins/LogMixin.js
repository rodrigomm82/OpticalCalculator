export default {
  // Classe responsável pela geração de logs
  methods: {
    // Log de cálculo de transposição
    transpositionLog: function (label) {
      return (label + '{' + this.$t('spherical') + ': ' + this.spherical.toFixed(2) + ', '
        + this.$t('cylindrical') + ': ' + this.cylindrical.toFixed(2) + ', '
        + this.$t('axis') + ': ' + this.axis + '°}')
    },

    // Log de cálculo de diâmetro
    diameterLog: function () {
      return ('{' + this.$t('bridge') + ': ' + this.bridge + ', '
        + this.$t('width') + ': ' + this.width + ', '
        + this.$t('largeDiagonal') + ': ' + this.largeDiagonal + ', '
        + this.$t('nasoPupillaryDistance') + ': ' + this.nasoPupillaryDistance + ', '
        + this.$t('diameter').toUpperCase() + ': ' + this.diameter + '}')
    },

    // Log de cálculo de adição
    additionLog: function () {
      return ('{' + this.$t('spherical') + ': ' + this.spherical.toFixed(2) + ', '
        + this.$t('cylindrical') + ': ' + this.cylindrical.toFixed(2) + ', '
        + this.$t('axis') + ': ' + this.axis + '°, '
        + this.$t('near') + ': ' + this.near.toFixed(2) + ', '
        + this.$t('addition').toUpperCase() + ': ' + this.addition.toFixed(2) + '}')
    },

    // Log de cálculo de grau de perto
    nearLog: function () {
      return ('{' + this.$t('spherical') + ': ' + this.spherical.toFixed(2) + ', '
        + this.$t('cylindrical') + ': ' + this.cylindrical.toFixed(2) + ', '
        + this.$t('axis') + ': ' + this.axis + '°, '
        + this.$t('addition') + ': ' + this.addition.toFixed(2) + ', '
        + this.$t('near').toUpperCase() + ': ' + this.near.toFixed(2) + '}')
    },

    // Geração de tooltip para campos de editáveis
    showTooltipField: function (field) {
      return 'Somente de ' + field.min + ' à ' + field.max + ' e a cada ' + field.step
    },

    // Geração de tooltip para botão
    showTooltipButton: function () {
      return 'Se algum dos elementos apresentar \'✖\', não será permitido calcular!'
    }

  }
}
