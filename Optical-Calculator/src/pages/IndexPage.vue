<template>
  <div class="full-height q-pa-md">
    <h4 class="text-italic">"Óculos são aquele acessório que atravessa gerações, se transforma e nunca perde sua beleza!"</h4>
    <h10 style="alignment: right">Caroline Stempniak</h10>
    <main-image/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MainImage from "components/MainImage";

export default defineComponent({
  name: 'IndexPage',
  components: {MainImage}
})
</script>
