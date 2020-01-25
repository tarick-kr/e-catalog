<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <list-categories
          :listCategories="listCategories"
          @numberCategory="clickOnCategory($event)"
        />
      </v-col>
      <v-col cols="4">
        <info
          :categoryId="getCategoryIdByIndex"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import ListCategories from './ListCategories'
import Info from './Info'

export default {
  name: 'CatalogList',
  components: { ListCategories, Info },
  props: {
    listCategories: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      activeCategory: [],
      countActiveCategory: 0,
      indexActiveCategory: 'noActive'
    }
  },
  mounted () {
    for (let i = 0; i < this.listCategories.length; i++) {
      this.activeCategory.push(false)
    }
    this.countActiveCategory = 0
  },
  methods: {
    clickOnCategory (ind) {
      // устанавливает в массиве activeCategory "true" если в выпадающем списке категория раскрыта
      // если в списке категорий все категории закрыты в массиве activeCategory будут только "false"
      if (this.countActiveCategory === 0) {
        this.activeCategory[ind] = true
        this.countActiveCategory++
        this.indexActiveCategory = ind
      } else {
        if (this.activeCategory[ind]) {
          this.activeCategory[ind] = !this.activeCategory[ind]
          this.countActiveCategory--
          this.indexActiveCategory = 'noActive'
        } else {
          for (let i = 0; i < this.activeCategory.length; i++) {
            if (this.activeCategory[i]) {
              this.activeCategory[i] = false
            }
          }
          this.activeCategory[ind] = !this.activeCategory[ind]
          this.indexActiveCategory = ind
        }
      }
    }
  },
  computed: {
    getCategoryIdByIndex () {
      if (this.countActiveCategory !== 0) {
        return this.listCategories[this.indexActiveCategory].categoryId
      } else {
        return 'noActive'
      }
    }
  }
}
</script>

<style scoped lang="sass">

</style>
