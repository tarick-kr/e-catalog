<template>
  <v-text-field
    :label="this.label"
    :hint="this.hintText"
    persistent-hint
    required
    :value="this.data.value"
    @input="onChangeValue($event)"
    @click="onActive"
    :error="this.validValue"
  />
</template>

<script>
export default {
  name: 'InputParam',
  data () {
    return {
      label: '',
      hint: '',
      patternValidParam: /^-?\d*\.?\d+$/,
      minimalValue: 0,
      maximalValue: 0,
      activated: ''
    }
  },
  props: {
    data: {
      type: [Object, Number],
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  watch: {
    'data.activated': {
      handler (val) {
        this.activated = val
      }
    }
  },
  mounted () {
    this.label = this.data.name + ' ' + this.data.sym + ',' + ' ' + this.data.unit
    this.activated = this.data.activated
    this.minimalValue = this.data.minimValue === 0 ? 0 : this.data.minimValue
    this.maximalValue = this.data.maximValue === 0 ? 'none' : this.data.maximValue
    // if (this.minimalValue !== 0 && this.maximalValue === 'none') {
    //   this.hint = 'минимальное занчение ' + this.data.minimValue + this.data.unit
    // } else if (this.minimalValue !== 0 && this.maximalValue !== 'none') {
    //   this.hint = 'от ' + this.data.minimValue + this.data.unit + ' до ' + this.data.maximValue + this.data.unit
    // } else if (this.minimalValue === 0 && this.maximalValue !== 'none') {
    //   this.hint = 'максимальное занчение ' + this.data.maximValue + this.data.unit
    // } else {
    //   this.hint = ''
    // }
  },
  methods: {
    onActive () {
      this.activated = true
      this.$emit('onActivate', {
        productParam: this.data,
        prop: 'activated',
        newValue: this.activated
      })
    },
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        productParam: this.data,
        prop: 'value',
        newValue: Number(e),
        valid: this.patternValidParam.test(e)
      })
    }
  },
  computed: {
    validValue () {
      return this.patternValidParam.test(String(this.data.value))
    },
    hintText () {
      if (this.minimalValue !== 0 && this.maximalValue === 'none') {
        console.log("this.minimalValue !== 0 && this.maximalValue === 'none' " + this.data.value)
        if (this.activated && this.data.value < this.minimalValue) {
          return 'значение не может быть меньше ' + this.minimalValue + this.data.unit
        } else if (this.activated && this.data.value === '') {
          return 'поле не может быть пустым'
        } else { return '' }
      } else if (this.minimalValue === 0 && this.maximalValue !== 'none') {
        if (this.activated && this.data.value > this.maximalValue) {
          return 'значение не может быть больше ' + this.maximalValue + this.data.unit
        } else if (this.activated && this.data.value === '') {
          return 'поле не может быть пустым'
        } else { return '' }
      } else if (this.minimalValue !== 0 && this.maximalValue !== 'none') {
        if (this.activated && this.data.value < this.minimalValue) {
          return 'значение не может быть меньше ' + this.minimalValue + this.data.unit
        } else if (this.activated && this.data.value > this.maximalValue) {
          return 'значение не может быть больше ' + this.maximalValue + this.data.unit
        } else if (this.activated && this.data.value === '') {
          return 'поле не может быть пустым'
        } else { return '' }
      } else { return '' }
    }
    // validValue () {
    //   if (this.patternValidParam.test(this.data.value) && this.data.value >= this.data.minimValue && this.data.value <= this.data.maximValue) {
    //     if (this.hintDiv !== '') {
    //       this.hintDiv.classList.remove('error--text')
    //     }
    //     return true
    //   } else {
    //     this.hintDiv.classList.add('error--text')
    //     return false
    //   }
    // }
  }
}
</script>

<style scoped>
</style>
