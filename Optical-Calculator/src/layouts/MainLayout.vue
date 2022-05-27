<template>
<!--  <q-layout view="lHh Lpr lFf">-->
  <q-layout view="hHh LpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img src="~assets/boy-glasses-white.png" width="40px" />
          Optical Calculator
        </q-toolbar-title>

        <help-component/>

      </q-toolbar>
    </q-header>

    <left-drawer
      v-model="leftDrawerOpen"
    />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LeftDrawer from "components/LeftDrawer";
import HelpComponent from "components/HelpComponent";

export default defineComponent({
  name: 'MainLayout',

  components: {
    HelpComponent,
    LeftDrawer,
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
