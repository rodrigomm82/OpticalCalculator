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
          <q-btn @click="additionCalculate(fields)" label="Calculate" color="primary"/>
        </q-item>

      <q-field outlined  stack-label>
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
import { ref } from 'vue'
import CalculationHeader from "components/CalculationHeader";
import CalculationBody from "components/CalculationBody";

export default {
  name: "Addition",
  components: {CalculationBody, CalculationHeader},
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
          max: 0,
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
        },
        {
          name: 'Near',
          ref: this.near.toFixed(2),
          max: 20,
          min: -20,
          step: 0.25,
          color: 'orange'
        }
      ],
      title: 'Addition',
      description: 'Known as tired view, presbyopia means that the customer needs different degrees to see correctly'
    }
  },

  methods: {

    additionCalculate(field) {
      this.spherical = field[0].ref.valueOf()
      this.near = field[3].ref.valueOf()
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
