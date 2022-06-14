<template>
  <h4 class="q-pa-md flex flex-center">
    Addition
  </h4>

  <q-page-container class="flex flex-left">
    <q-item v-model="campo.ref"
        v-for="campo in campos"
        :key="campo.name"
    >
      <q-item-section>
        <q-item-label
          :style="'color:' + campo.color" class="col-md-4 control-label"
        >{{ campo.name }}:
        </q-item-label>
      </q-item-section>
    <q-item-section>
      <input v-model="campo.ref" :id="campo.name"
             type="number" :name="campo.name" class="col-md-8 form-control"
             :min="campo.min" :max="campo.max" :step="campo.step">
    </q-item-section>
    </q-item>

  </q-page-container>
    <q-list  class="flex flex-center q-pq-md">
        <q-item>
        <q-btn @click="additionCalculate(campos)" label="Calculate" color="primary"/>
        </q-item>
        <q-item >
          <q-item-section>
            <q-item-label>Addition</q-item-label>
            <q-item-label>{{ this.addition.toFixed(2) }}</q-item-label>
          </q-item-section>
        </q-item>
    </q-list>

</template>

<script>
import { ref } from 'vue'

export default {
  name: "Addition",



  data () {
    return {
      campos: [
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
          max: 0,
          min: -6,
          step: 0.25,
          color: 'blue'
        },
        {
          name: 'Axis',
          ref: this.axis + '°',
          max: 180,
          min: 0,
          step: 1,
          color: 'red'
        },
        {
          name: 'Near',
          ref: this.near.toFixed(2),
          max: 20,
          min: -20,
          step: 0.25,
          color: 'orange'
        }
      ]
    }
  },

  methods: {

    additionCalculate(campos) {
      this.spherical = campos[0].ref.valueOf()
      this.near = campos[3].ref.valueOf()
      this.addition = (this.near - this.spherical)
      console.log('Adição: ' + this.addition)
      console.log('Perto: ' + this.near)
      console.log('Longe: ' + this.spherical)
    }


  },

  computed: {  },

  setup () {
    const addition = ref(0)
    const spherical = ref(0)
    const cylindrical = ref(0)
    const axis = ref(0)
    const near = ref(0)


    return {
      spherical,
      cylindrical,
      axis,
      near,
      addition,

    }
  }
}
</script>

<style scoped>

</style>
