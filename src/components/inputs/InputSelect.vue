<template>
  <v-select
    :label="this.label"
    :value="this.changeSelectField.value"
    required
    :items="this.changeSelectField.arraySelectItems"
  />
</template>

<script>
export default {
  name: 'InputSelect',
  data () {
    return {
      label: ''
    }
  },
  props: {
    data: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  mounted () {
    this.label = this.changeSelectField.sym ? this.changeSelectField.name + ' ' + this.changeSelectField.sym + ', ' + this.changeSelectField.unit : this.changeSelectField.name
  },
  methods: {
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        newValue: e
      })
    }
  },
  computed: {
    changeSelectField () {
      const type = this.data
      return this.$store.getters.getSelectFieldByType(type)
    }
  }
}
</script>

<style scoped>

</style>
