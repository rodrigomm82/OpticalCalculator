<template>
  <q-item
    clickable
    :to="to"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CalculationLinks',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    to: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>

<style>
a:link {
  color: white;
}
a:hover {
  color: darkblue;
}
a:active {
  color: lightblue;
}

</style>

<style>
a:link {
  color: white;
}
a:hover {
  color: darkblue;
}
a:active {
  color: lightblue;
}

</style>
