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

        <div id="time"></div>

      </q-toolbar>
    </q-header>

    <left-drawer
      v-model="leftDrawerOpen"
    />

    <q-page-container>
      <q-page>
        <div class="col">
          <div class="full-height">
            <router-view/>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LeftDrawer from "components/LeftDrawer";
import HelpComponent from "components/HelpComponent";

const zeroFill = n => {
  return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
  const now = new Date();
  document.getElementById('time').innerHTML = zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth()
      + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' +
    zeroFill(now.getSeconds());
}, 1000);

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
