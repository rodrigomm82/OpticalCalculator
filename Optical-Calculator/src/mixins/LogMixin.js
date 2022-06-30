export default {
  methods: {
    // Classe responsável pela geração de logs

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
    }
  }
}
