<template>
  <q-page  class="">
    <q-page-container  class="q-pa-md">
      <p class="text-italic" style="color: #1976d2; text-align: justify">{{ this.content }}</p>
      <p class="float-right">- {{ this.author }}</p>
    </q-page-container>
    <q-page-container class="fixed-bottom-right q-pb-md q-pr-md q-mb-lg">
      <img
           alt="Optical Calculator logo"
           src="~assets/boy-glasses-grey-blue.png"
           style="max-width: 30vw; max-height: 30vh"
      />
    </q-page-container>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const author = 'Jô Soares'
    const content = '"A prova de que a natureza é sábia é que ela nem sabia que iríamos usar óculos e notem como' +
      ' colocou nossas orelhas!"'

    return { author, content }
  }
})
</script>
