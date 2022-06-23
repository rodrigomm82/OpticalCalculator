<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        {{ this.$t('404') }}
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        :label="this.$t('home')"
        no-caps
      />
      <img class="flex absolute-bottom-right q-pb-md q-pr-md"
           alt="Optical Calculator logo"
           src="~assets/boy-glasses-blue-white.png"
           style="max-width: 30vw; max-height: 30vh"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
