<template>
  <v-card>
    <v-list class="pb-0">
      <v-list-group
        no-action
        v-for="(item, index) in listCategories"
        :key="item.categoryId"
        active-class="active-category"
      >
        <template v-slot:activator>
          <v-list-item-content @click="onClick(index)">
            <v-list-item-title>{{ item.categoryName }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <list-products-in-category
          :categoryId="item.categoryId"
        />
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
import ListProductsInCategory from './ListProductsInCategory'

export default {
  name: 'ListCategories',
  components: {
    ListProductsInCategory
  },
  props: {
    listCategories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick (ind) {
      this.$emit('numberCategory', ind)
    }
  }
}
</script>

<style lang="sass">
  .active-category
    background-color: #176abd
    margin-bottom: 5px
  .active-category
    .v-list-item__content
      .v-list-item__title
        color: #ffffff
    .v-list-item__icon
      .v-icon
        color: #ffffff
</style>
