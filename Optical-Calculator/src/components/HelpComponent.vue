<template>
  <div class="q-gutter-md row">
    <q-btn-dropdown
      :label="this.$t('help')"
      icon="mdi-help"
      flat
      dense
    >
      <q-card-section>
        <h4 class="text-body2">{{ this.$t('developer') }}:<br>Rodrigo Moreira</h4>
        <h4 class="text-body2">Quasar - v{{ $q.version }}</h4>
      </q-card-section>
    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "HelpComponent",
}
</script>

<style scoped>
</style>
