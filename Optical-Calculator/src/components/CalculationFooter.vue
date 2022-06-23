<template>
  <q-footer elevated class=" flex flex-center">
    <q-toolbar-title class="text-subtitle2 q-my-sm flex flex-center">
      {{ this.$t('developer') }}: Rodrigo Moreira
      <q-separator class="orientation-landscape" dark spaced="20px" vertical/>
      <q-separator class="orientation-portrait" dark spaced="10px" vertical/>
      Quasar Version: {{ this.$q.version }}
      <q-separator class="orientation-landscape" dark spaced="20px" vertical/>
      <q-separator class="orientation-portrait mobile-hide" dark spaced="10px" vertical/>

      <q-list v-for="icon in icons" :key="icon.name">
        <a :href="icon.href">
          <q-icon size="1.4rem" class="q-px-xs text-white" :name="icon.name"/>
        </a>
      </q-list>

    </q-toolbar-title>
  </q-footer>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "CalculationFooter",

  setup () {
    const icons = ref([
      {name:'mdi-facebook', href:'https://www.facebook.com/rodrigommoreira82'},
      {name:'mdi-linkedin', href:'https://www.linkedin.com/in/rodrigomm82'},
      {name:'mdi-email', href:'mailto:rodrigo.mm82@hotmail.com'},
    ])
    return { icons }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>
