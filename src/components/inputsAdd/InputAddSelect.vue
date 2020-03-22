<template>
  <v-select
    :label="this.label"
    :value="this.payload.value"
    required
    :items="this.payload.arraySelectItems"
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
    payload: {
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
      this.label = this.payload.sym ? this.payload.name + ' ' + this.payload.sym + ', ' + this.payload.unit : this.payload.name
    },
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        productSelect: this.payload,
        prop: 'value',
        newValue: e
      })
    }
  }
}
</script>

<style scoped>

</style>
