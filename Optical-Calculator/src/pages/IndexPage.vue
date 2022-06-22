<template>
  <section class="full-height q-pa-md">
    <h6 class="text-italic" style="color: #1976d2; text-align: justify">{{ this.content }}</h6>
    <p class="float-right">- {{ this.author }}</p>
  </section>
  <section>
    <img class="flex absolute-bottom-right q-pb-md q-pr-md"
         alt="Optical Calculator logo"
         src="~assets/boy-glasses-blue.png"
         style="max-width: 30vw; max-height: 30vh"
    />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const author = 'Jô Soares'
    const content = '"A prova de que a natureza é sábia é que ela nem sabia que iríamos usar óculos e notem como colocou nossas orelhas!"'

    return { author, content }
  }
})
</script>
