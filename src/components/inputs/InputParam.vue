<template>
  <v-text-field
    :hint="this.hintText"
    :label="this.label"
    required
    v-model="paramValue"
    @input="updateInput($event)"
    @blur="$v.paramValue.$touch()"
    :error-messages="paramErrors"
  />
</template>

<script>

import { required, minValue, maxValue, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'InputParam',
  data () {
    return {
      label: '',
      hintText: '',
      paramValue: '',
      hasMinimValue: false,
      hasMaximValue: false
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
  mounted () {
    this.label = this.data.name + ' ' + this.data.sym + ',' + ' ' + this.data.unit

    if (this.data.minimValue !== 'none' && this.data.maximValue === 'none') {
      this.hintText = 'Минимальное значение ' + this.data.minimValue
      this.hasMinimValue = true
      this.hasMaximValue = false
    } else if (this.data.minimValue === 'none' && this.data.maximValue !== 'none') {
      this.hintText = 'Максимальное значение ' + this.data.maximValue
      this.hasMinimValue = false
      this.hasMaximValue = true
    } else if (this.data.minimValue !== 'none' && this.data.maximValue !== 'none') {
      this.hintText = 'Значение должно быть от ' + this.data.maximValue + ' ' + 'до ' + this.data.maximValue
      this.hasMinimValue = true
      this.hasMaximValue = true
    } else {
      this.hintText = ''
      this.hasMinimValue = false
      this.hasMaximValue = false
    }
  },
  validations () {
    if (this.hasMinimValue && !this.hasMaximValue) {
      return {
        paramValue: {
          required,
          minValue: minValue(this.data.minimValue),
          numeric
        }
      }
    } else if (!this.hasMinimValue && this.hasMaximValue) {
      return {
        paramValue: {
          required,
          maxValue: maxValue(this.data.maximValue),
          numeric
        }
      }
    } else if (this.hasMinimValue && this.hasMaximValue) {
      return {
        paramValue: {
          required,
          minValue: minValue(this.data.minimValue),
          maxValue: maxValue(this.data.maximValue),
          numeric
        }
      }
    } else {
      return {
        paramValue: {
          required,
          numeric
        }
      }
    }
  },
  methods: {
    updateInput (e) {
      this.$v.paramValue.$touch()
      this.onChangeValue(e)
    },
    onChangeValue (e) {
      this.$emit('onUpdate', {
        index: this.index,
        productParam: this.data,
        propValue: 'value',
        newValue: e,
        propValid: 'valid',
        newValidValue: this.validValue
      })
    },
    reset () {
      this.$nextTick(() => { this.$v.$reset() })
      this.paramValue = ''
    }
  },
  computed: {
    paramErrors () {
      const errors = []
      if (!this.$v.paramValue.$dirty) return errors

      if (this.data.minimValue !== 'none' && this.data.maximValue === 'none') {
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.numeric && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
      } else if (this.data.minimValue === 'none' && this.data.maximValue !== 'none') {
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.numeric && errors.push('Введите корректное значение')
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
      } else if (this.data.minimValue !== 'none' && this.data.maximValue !== 'none') {
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.numeric && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
      } else {
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.numeric && errors.push('Введите корректное значение')
      }
      return errors
    },
    validValue () {
      return this.paramErrors.length === 0
    }
  }
}
</script>

<style scoped>
</style>
