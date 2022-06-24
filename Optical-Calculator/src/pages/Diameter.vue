<template>
  <calculation-page
    :title="title"
    :description="description"
    :fields="fields"
    :image="image"
  />
</template>

<script>
import CalculationPage from 'components/CalculationPage'
export default {
    name: 'Diameter',

  components: {CalculationPage},

  data() {
    return {
      fields: [
        {name: this.$t('width'), ref: 10, max: 80,  min: 10, step: 1, color: 'green'},
        {name: this.$t('largeDiagonal'), ref: 10, max: 80,  min: 10, step: 1, color: 'red'},
        {name: this.$t('bridge'), ref: 10, max: 80,  min: 10, step: 1, color: 'orange'},
        {name: this.$t('nasoPupillaryDistance'), ref: 5, max: 80,  min: 5, step: 1, color: 'grey'}
      ],

      title: this.$t('diameter'),
      description: this.$t('diameterDescription'),
      image: 'diameter.png'

      /*image:'https://imgbox.com/IFGEX4RG'*/
/*
      image: 'https://bn1304files.storage.live.com/y4mgYAAUxfuEe8iE5rMqees6WYtRbEZRn0ieduq4IUQugAW2F8-rS93AT96Uev3Gedw60jU2dpC66TOhpakVzxBZERtbTVTHQ3fhXNHFPsfy1NzvyaGtqOacR49IZuBziW68_p_tMAvPT8iZN0dXxgiETNcvFBZS668Hz2S0KJsSxNMb_BYvOmz_5ZV7WjOpjR07NfRiV2bZNsadMOYZbcNs0dmv5sOZLQm_gHAQOa_Mi8?encodeFailures=1&width=383&height=162'
*/
/*
      image: 'https://bn1304files.storage.live.com/y4m4eFX4jq4_SXXUo3ApTU-ynC2s_oB7oZbo4OxEQDKdJQ3mBNNrXU8jHaSdIy2o1ObwsOaPPSAMyJFrtKtZt7VFb5aH2xI8DpRM8dXkH2HWXth8r5V8qOaKoVpUOAX_TEumv9uJ65Ms0Xwp9S_S3yxGZevE_O6EyZcqaqACkOFN6bOWxcCa6kjUSKRLIkB3zi6_iWJPjCoNW4WveFAntYor1-gfofWl5JmcsyjkrY-fSE?encodeFailures=1&width=383&height=162'
*/
    }
  },
}
</script>

<style scoped>

</style>
