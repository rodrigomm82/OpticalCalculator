<template>
  <div class="q-pa-lg flex flex-center">
    <h4>
      Transposition
    </h4>
    <p class="q-px-lg">Transposition is the change of numbers and signals without changing the diopthic value of the lens. Every cylindrical lens, combined or toric, has two ways of being read or prescribed. One with the positive cylindrical and the other with the negative cylindrical.</p>
<!--
    <p>A transposição é a mudança de números e sinais sem alterar o valor dióptrico da lente. Toda lente cilíndrica, combinada ou tórica, possui duas formas de serem lidas ou prescritas. Uma com o cilíndrico positivo e outra com o cilíndrico negativo.</p>
-->
  </div>

    <q-page-container class="flex flex-left">
      <q-item v-model="field.ref"
              v-for="field in fields"
              :key="field.name"
      >
        <q-item-section>
          <q-item-label
            :style="'color:' + field.color" class="col-md-4 control-label"
          >{{ field.name }}:
          </q-item-label>
        </q-item-section>

        <q-item-section>
          <input v-model="field.ref" :id="field.name"
                 type="number" :name="field.name" class="col-md-8 form-control"
                 :min="field.min" :max="field.max" :step="field.step">
        </q-item-section>
      </q-item>
    </q-page-container>

    <q-list  class="flex flex-center q-pq-md">
      <q-item>
        <q-btn @click="transpositionCalculate(fields)" label="Calculate" color="primary"/>
      </q-item>
    </q-list>

</template>

<script>
import {ref} from "vue";

export default {
  name: "Transposition",

  data () {
    return {
      fields: [
        {
          name: 'Spherical',
          ref: this.spherical.toFixed(2),
          max: 20,
          min: -20,
          step: 0.25,
          color: 'green'
        },
        {
          name: 'Cylindrical',
          ref: this.cylindrical.toFixed(2),
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
      ],
    }
  },

  methods: {

    transpositionCalculate(field) {
      this.spherical = field[0].ref.valueOf()
      this.cylindrical = field[1].ref.valueOf()
      this.axis = field[2].ref.valueOf()

      if (this.cylindrical > 0) {
        this.spherical += this.cylindrical
        this.cylindrical *= -1

        if (this.axis >= 90) {
          this.axis -= 90
        } else {
          this.axis += 90
        }
        this.results = field
        this.results[0].ref = this.spherical
        this.results[1].ref = this.cylindrical
        this.results[2].ref = this.axis
      }
      console.log('Longe: ' + this.spherical)
      console.log('Cilíndrico: ' + this.cylindrical)
      console.log('Eixo: ' + this.axis)
      //console.log(this.resultados)
    }

  },

  computed: {  },

  setup () {
    const spherical = ref(0)
    const cylindrical = ref(0)
    const axis = ref(0)

    return {
      spherical,
      cylindrical,
      axis,
    }
  }
}
</script>

<style scoped>

</style>
