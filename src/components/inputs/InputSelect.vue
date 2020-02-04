<template>
  <v-select
    :label="this.label"
    :value="this.data.value"
    required
    :items="this.data.arraySelectItems"
    @input="onChangeValue($event)"
    outlined
    dense
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
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  mounted () {
    this.initValue()
  },
  methods: {
    initValue () {
      this.label = this.data.sym ? this.data.name + ' ' + this.data.sym + ', ' + this.data.unit : this.data.name
    },
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        productSelect: this.data,
        prop: 'value',
        newValue: e
      })
    }
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
