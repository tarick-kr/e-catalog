<template>
  <v-container>
    <v-expansion-panels focusable>
      <list-category :titleCategory="titleCategory"/>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import ListCategory from './ListCategories'

export default {
  name: 'CatalogList',
  components: { ListCategory },
  props: ['titleCategory']
}
</script>

<style scoped lang="sass">

</style>
