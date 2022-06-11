<template>
  <q-drawer
    show-if-above
    bordered
    class="left-navigation text-white"
  >
    <div class="drawer">
        <q-list >
          <calculation-links
            v-for="link in linksList"
            :key="link.title"
            v-bind="link"
            :to="link.to"
          />
        </q-list>
    </div>
  </q-drawer>

</template>

<script>
import {defineComponent} from 'vue'
import CalculationLinks from 'components/CalculationLinks.vue'

export default defineComponent( {
  name: "LeftDrawer",

  components: {
    CalculationLinks
  },

  data() {
    return {
      linksList: [
        {
          title: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          title: 'Transposition',
          icon: 'mdi-swap-horizontal-bold',
          to: '/calculation/transposition'
        },
        {
          title: 'Addition',
          icon: 'mdi-eye-plus',
          to: '/calculation/addition'
        },
        {
          title: 'Near',
          icon: 'mdi-monitor-eye',
          to: '/calculation/near'
        },
        {
          title: 'Diameter',
          icon: 'mdi-diameter-variant',
          to: '/calculation/diameter'
        },
        {
          title: 'Edge Thickness',
          icon: 'mdi-glasses',
          to: '/calculation/edge-thickness'
        },
      ]
    }

  },
})
</script>

<style scoped>
.drawer {
  background-color: #5ce17a;
  height: 100%;
}
.navigation-item {
  border-radius: 5px;
}
</style>
