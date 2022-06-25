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
      <q-separator inset color="darkgreen" spaced/>
      <q-list>
        <q-item
          clickable target="_blank"
          href="https://youtu.be/i2PXDsFSacQ"
        >
          <q-item-section
            avatar
          >
            <q-icon name="mdi-cast-education" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Tutorial</q-item-label>
          </q-item-section>
        </q-item>
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
          title: this.$t('home'),
          icon: 'home',
          to: '/'
        },
        {
          title: this.$t('transposition'),
          icon: 'mdi-swap-horizontal-bold',
          to: '/calculation/transposition'
        },
        {
          title: this.$t('addition'),
          icon: 'mdi-eye-plus',
          to: '/calculation/addition'
        },
        {
          title: this.$t('near'),
          icon: 'mdi-monitor-eye',
          to: '/calculation/near'
        },
        {
          title: this.$t('diameter'),
          icon: 'mdi-diameter-variant',
          to: '/calculation/diameter'
        },
        /*{
          title: this.$t('edgeThickness'),
          icon: 'mdi-glasses',
          to: '/calculation/edge-thickness'
        },*/
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
</style>
