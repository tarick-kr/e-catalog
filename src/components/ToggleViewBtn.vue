<template>
  <div class="d-inline-flex">
    <v-btn
      tile
      text
      small
      @click="onClickViewCatalog"
      :class="!this.viewCard ? 'v-btn--active' : ''"
    >
      <v-icon size="16">mdi-view-sequential</v-icon>
    </v-btn>
    <v-btn
      tile
      text
      small
      @click="onClickViewCatalog"
      :class="this.viewCard ? 'v-btn--active' : ''"
    >
      <v-icon size="16">mdi-view-grid</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ToggleViewBtn',
  props: {
    viewCard: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onClickViewCatalog () {
      this.$store.dispatch('TOGGLE_VIEW_TYPE_CATALOG')
    }
  }
}
</script>

<style scoped lang="sass">
  .v-btn--active
    color: #1976D2
</style>
