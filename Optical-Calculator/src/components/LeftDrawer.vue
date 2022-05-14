<template>
  <q-drawer
    show-if-above
    bordered
  >
    <q-list
      class="drawer"
    >
      <q-item-label
        header
      >
        Calculations
      </q-item-label>

      <EssentialLink
        id="links"
        v-for="link in essentialLinks"
        :key="link.title"
        v-bind="link"
      />
    </q-list>
  </q-drawer>

</template>

<script>
import {defineComponent} from 'vue'
import EssentialLink from 'components/EssentialLink'

const linksList = [
  {
    title: 'Transposition',
    caption: 'quasar.dev',
    icon: 'mdi-swap-horizontal-bold',
    link: 'https://quasar.dev'
  },
  {
    title: 'Addition',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Near',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Diameter',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Edge Thickness',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
]

export default defineComponent( {
  name: "LeftDrawer",

  components: {
    EssentialLink
  },

  setup () {

    return {
      essentialLinks: linksList
    }
  }
})
</script>

<style scoped>
.drawer {
  background-color: #5ce17a;
  height: 100%;
}
#links {
  color: white;
}
</style>
