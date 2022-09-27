<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          dense stack
          aria-label="Menu"
          @click="toggleLeftDrawer"
          size="10px" class="mobile-only"
        >
          <q-icon size="26px" name="menu"/>
          <div style="font-size: 6pt; height: 2vh">
            Menu
          </div>
        </q-btn>
        <q-btn
          dense flat
          icon="menu" size="20px"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="mobile-hide"
        />

        <q-toolbar-title class="mobile-hide">
          <q-img src="~assets/boy-glasses-white.png" width="40px" class="mobile-hide" />
          {{ this.$t('opticalCalculator') }}
        </q-toolbar-title>

        <q-toolbar-title class="mobile-only" style="font-size: 12pt">
          <q-img src="~assets/boy-glasses-white.png" width="20px" class="mobile-only" />
          {{ this.$t('opticalCalculator') }}
        </q-toolbar-title>

        <q-separator vertical inset class="q-mx-sm mobile-hide"/>

        <q-card class="mobile-hide" borderless flat style="background-color: #1976d2">

          <q-item-section>
            <div id="time"></div>

          </q-item-section>
          <q-item-section>
            <div id="hour"></div>

          </q-item-section>
        </q-card>

      </q-toolbar>
    </q-header>

    <left-drawer
      v-model="leftDrawerOpen"
    />

    <calculator-router-view/>

    <calculation-footer/>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LeftDrawer from "components/commons/LeftDrawer";
import {useI18n} from "vue-i18n";
import CalculationFooter from "components/commons/CalculationFooter";
import CalculatorRouterView from "components/commons/CalculatorRouterView";

const zeroFill = n => {
  return ('0' + n).slice(-2);
}

const interval = setInterval(() => {
  const now = new Date();
  document.getElementById('time').innerHTML = zeroFill(now.getDate()) + '/' + zeroFill((now.getMonth()
      + 1)) + '/' + now.getFullYear();
  document.getElementById('hour').innerHTML = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' +
    zeroFill(now.getSeconds());
}, 1000);

export default defineComponent({
  name: 'MainLayout',

  components: {
    CalculatorRouterView,
    CalculationFooter,
    LeftDrawer,
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const {locale} = useI18n({useScope: 'global'})

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      locale,
      localeOptions: [
        {value: 'en-US', label: 'English', icon: 'img:icons/usa_flag.svg'},
        {value: 'pt-BR', label: 'Português', icon: 'img:icons/brazil_flag.svg'}
      ],
    }
  },

})
</script>
<style type="text/css">
#button_menu {
  font-size: 20pt;
}
</style>
