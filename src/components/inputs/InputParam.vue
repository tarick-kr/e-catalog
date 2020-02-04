<template>
  <v-text-field
    :hint="this.hintText"
    :label="this.label"
    required
    v-model="paramValue"
    @input="updateInput($event)"
    @blur="$v.paramValue.$touch()"
    :error-messages="paramErrors"
    outlined
    dense
  />
</template>

<script>

import { required, minValue, maxValue, integer, decimal } from 'vuelidate/lib/validators'

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
      // целые числа с ограничением минимального значения
      this.hintText = 'Минимальное значение параметра - ' + this.data.minimValue + this.data.unit
      this.hasMinimValue = true
      this.hasMaximValue = false
    } else if (this.data.minimValue === 'none' && this.data.maximValue !== 'none') {
      this.hintText = 'Максимальное значение параметра - ' + this.data.maximValue + this.data.unit
      this.hasMinimValue = false
      this.hasMaximValue = true
    } else if (this.data.minimValue !== 'none' && this.data.maximValue !== 'none') {
      this.hintText = 'Значение параметра может быть от ' + this.data.maximValue + this.data.unit + ' ' + 'до ' + this.data.maximValue + this.data.unit
      this.hasMinimValue = true
      this.hasMaximValue = true
    } else {
      this.hintText = ''
      this.hasMinimValue = false
      this.hasMaximValue = false
    }
  },
  validations () {
    if (this.hasMinimValue && !this.hasMaximValue && this.data.decimal === false) {
      // целые числа с ограничением минимального значения
      return {
        paramValue: {
          required,
          minValue: minValue(this.data.minimValue),
          integer
        }
      }
    } else if (this.hasMinimValue && !this.hasMaximValue && this.data.decimal === true) {
      // десятичные числа с ограничением минимального значения
      return {
        paramValue: {
          required,
          minValue: minValue(this.data.minimValue),
          decimal
        }
      }
    } else if (!this.hasMinimValue && !this.hasMaximValue && this.data.decimal === false) {
      // целые числа без ограничения значения
      return {
        paramValue: {
          required,
          integer
        }
      }
    } else if (this.hasMinimValue && this.hasMaximValue && this.data.decimal === false) {
      // целые числа с ограничением минимального и максимального значения
      return {
        paramValue: {
          required,
          integer,
          minValue: minValue(this.data.minimValue),
          maxValue: maxValue(this.data.maximValue)
        }
      }
    } else if (this.hasMinimValue && this.hasMaximValue && this.data.decimal === true) {
      // десятичные числа с ограничением минимального и максимального значения
      return {
        paramValue: {
          required,
          decimal,
          minValue: minValue(this.data.minimValue),
          maxValue: maxValue(this.data.maximValue)
        }
      }
    } else if (!this.hasMinimValue && this.hasMaximValue && this.data.decimal === false) {
      // целые числа с ограничением максимального значения
      return {
        paramValue: {
          required,
          integer,
          maxValue: maxValue(this.data.maximValue)
        }
      }
    } else if (!this.hasMinimValue && !this.hasMaximValue && this.data.decimal === true) {
      // десятичные числа без ограничения значения
      return {
        paramValue: {
          required,
          decimal
        }
      }
    } else {
      // десятичные числа с ограничением максимального значения (this.data.decimal === true)
      return {
        paramValue: {
          required,
          decimal,
          maxValue: maxValue(this.data.maximValue)
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

      if (this.hasMinimValue && !this.hasMaximValue && this.data.decimal === false) {
        // целые числа с ограничением минимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
      } else if (this.hasMinimValue && !this.hasMaximValue && this.data.decimal === true) {
        // десятичные числа с ограничением минимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
      } else if (!this.hasMinimValue && !this.hasMaximValue && this.data.decimal === false) {
        // целые числа без ограничения значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
      } else if (this.hasMinimValue && this.hasMaximValue && this.data.decimal === false) {
        // целые числа с ограничением минимального и максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
      } else if (this.hasMinimValue && this.hasMaximValue && this.data.decimal === true) {
        // десятичные числа с ограничением минимального и максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.data.minimValue)
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
      } else if (!this.hasMinimValue && this.hasMaximValue && this.data.decimal === false) {
        // целые числа с ограничением максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
      } else if (!this.hasMinimValue && !this.hasMaximValue && this.data.decimal === true) {
        // десятичные числа без ограничения значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
      } else {
        // десятичные числа с ограничением максимального значения (this.data.decimal === true)
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.data.maximValue)
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
