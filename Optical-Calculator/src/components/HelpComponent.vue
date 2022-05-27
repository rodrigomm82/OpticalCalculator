<template>
  <div class="q-gutter-md row">

    <q-btn-dropdown
      label="Help"
      icon="mdi-help"
      flat
      dense
    >
      <q-card-section>
        <h5 class="text-body2">Desenvolvedor:<br>Rodrigo Moreira</h5>
        <h4 class="text-body2">Quasar - {{ $q.version }}</h4>
      </q-card-section>

    </q-btn-dropdown>
  </div>
</template>

<script>
export default {
  name: "HelpComponent"
}
</script>

<style scoped>

</style>
