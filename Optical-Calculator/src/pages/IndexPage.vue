<template>
  <section class="full-height q-pa-md">
    <h5 class="text-italic" style="color: #1976d2; text-align: justify">{{ this.content }}</h5>
    <p class="float-right">{{ this.author }}</p>
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
    const author = 'Caroline Stempniak'
    const content = '"Óculos são aqueles acessórios que atravessam gerações, se transformam e nunca perdem sua beleza!"'

    return { author, content }
  }
})
</script>
