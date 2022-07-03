<template>

  <q-card class="q-mx-xl q-py-md" bordered>

    <q-form class="flex flex-center q-px-lg">
      <q-list>
        <q-item v-model="field.ref"
                v-for="field in fields"
                :key="field.name"
                class="inline-block"
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
            <q-tooltip class="mobile-hide">
              {{ this.showTooltipField(field) }}
            </q-tooltip>
            <q-tooltip class="mobile-only" :hide-delay="delay">
              {{ this.showTooltipField(field) }}
            </q-tooltip>
            <span class="validity"/>
          </q-item-section>
        </q-item>

      </q-list>
    </q-form>
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
        <q-btn v-else @click="calculationButton(fields, title)" :label="$t('calculate')" color="primary"/>
        <q-tooltip class="mobile-only" :hide-delay="delay">
          {{ this.showTooltipButton() }}
        </q-tooltip>
        <q-tooltip class="mobile-hide">
          {{ this.showTooltipButton() }}
        </q-tooltip>
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
import CalculationResult from 'components/CalculationResult'
import DateMixin from "src/mixins/DateMixin";
import LogMixin from "src/mixins/LogMixin";
import CalculationMixin from "src/mixins/CalculationMixin";

export default {
  name: "CalculationBody",

  components: {
    CalculationResult
  },

  mixins: [DateMixin, LogMixin, CalculationMixin],

  props: {
    fields: Object,
    image: String,
    title: String,
  },

  data() {
    return {
      delay: 1000,
    }
  },

  setup () {
    const near = ref(0)
    const addition = ref(0)
    const diameter = ref(0)
    return {near, addition, diameter}
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
    // Invoca os métodos de responsáveis por cada página
    calculationButton: function (field) {
      this.parameterReceipt(field)
      if (this.title === this.$t('transposition')) this.transpositionCalculate(field)
      if (this.title === this.$t('addition')) this.additionCalculate()
      if (this.title === this.$t('near')) this.nearCalculate()
      if (this.title === this.$t('diameter')) this.diameterCalculate()
    }
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

.image-web {
  max-height:40vh;
  max-width: 30vw;
}

.image-mobile {
  max-height:80vh;
  max-width: 60vw;
}

</style>
