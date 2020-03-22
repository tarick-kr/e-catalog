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
    payload: {
      type: [Object, Number],
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  mounted () {
    this.label = this.payload.name + ' ' + this.payload.sym + ',' + ' ' + this.payload.unit

    if (this.payload.minimValue !== 'none' && this.payload.maximValue === 'none') {
      // числа с ограничением минимального значения
      this.hintText = 'Минимальное значение параметра - ' + this.payload.minimValue + this.payload.unit
      this.hasMinimValue = true
      this.hasMaximValue = false
    } else if (this.payload.minimValue === 'none' && this.payload.maximValue !== 'none') {
      this.hintText = 'Максимальное значение параметра - ' + this.payload.maximValue + this.payload.unit
      this.hasMinimValue = false
      this.hasMaximValue = true
    } else if (this.payload.minimValue !== 'none' && this.payload.maximValue !== 'none') {
      this.hintText = 'Значение параметра может быть от ' + this.payload.minimValue + this.payload.unit + ' ' + 'до ' + this.payload.maximValue + this.payload.unit
      this.hasMinimValue = true
      this.hasMaximValue = true
    } else {
      this.hintText = ''
      this.hasMinimValue = false
      this.hasMaximValue = false
    }
  },
  validations () {
    if (this.hasMinimValue && !this.hasMaximValue && !this.payload.decimal) {
      // целые числа с ограничением минимального значения
      return {
        paramValue: {
          required,
          minValue: minValue(this.payload.minimValue),
          integer
        }
      }
    } else if (this.hasMinimValue && !this.hasMaximValue && this.payload.decimal) {
      // десятичные числа с ограничением минимального значения
      return {
        paramValue: {
          required,
          minValue: minValue(this.payload.minimValue),
          decimal
        }
      }
    } else if (!this.hasMinimValue && !this.hasMaximValue && !this.payload.decimal) {
      // целые числа без ограничения значения
      return {
        paramValue: {
          required,
          integer
        }
      }
    } else if (this.hasMinimValue && this.hasMaximValue && !this.payload.decimal) {
      // целые числа с ограничением минимального и максимального значения
      return {
        paramValue: {
          required,
          integer,
          minValue: minValue(this.payload.minimValue),
          maxValue: maxValue(this.payload.maximValue)
        }
      }
    } else if (this.hasMinimValue && this.hasMaximValue && this.payload.decimal) {
      // десятичные числа с ограничением минимального и максимального значения
      return {
        paramValue: {
          required,
          decimal,
          minValue: minValue(this.payload.minimValue),
          maxValue: maxValue(this.payload.maximValue)
        }
      }
    } else if (!this.hasMinimValue && this.hasMaximValue && !this.payload.decimal) {
      // целые числа с ограничением максимального значения
      return {
        paramValue: {
          required,
          integer,
          maxValue: maxValue(this.payload.maximValue)
        }
      }
    } else if (!this.hasMinimValue && !this.hasMaximValue && this.payload.decimal) {
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
          maxValue: maxValue(this.payload.maximValue)
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
        productParam: this.payload,
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

      if (this.hasMinimValue && !this.hasMaximValue && !this.payload.decimal) {
        // целые числа с ограничением минимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.payload.minimValue)
      } else if (this.hasMinimValue && !this.hasMaximValue && this.payload.decimal) {
        // десятичные числа с ограничением минимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.payload.minimValue)
      } else if (!this.hasMinimValue && !this.hasMaximValue && !this.payload.decimal) {
        // целые числа без ограничения значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
      } else if (this.hasMinimValue && this.hasMaximValue && !this.payload.decimal) {
        // целые числа с ограничением минимального и максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.payload.minimValue)
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.payload.maximValue)
      } else if (this.hasMinimValue && this.hasMaximValue && this.payload.decimal) {
        // десятичные числа с ограничением минимального и максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.minValue && errors.push('Значение не может быть меньше ' + this.payload.minimValue)
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.payload.maximValue)
      } else if (!this.hasMinimValue && this.hasMaximValue && !this.payload.decimal) {
        // целые числа с ограничением максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.integer && errors.push('Введите корректное значение')
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.payload.maximValue)
      } else if (!this.hasMinimValue && !this.hasMaximValue && this.payload.decimal) {
        // десятичные числа без ограничения значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
      } else {
        // десятичные числа с ограничением максимального значения
        !this.$v.paramValue.required && errors.push('Поле не может быть пустым')
        !this.$v.paramValue.decimal && errors.push('Введите корректное значение')
        !this.$v.paramValue.maxValue && errors.push('Значение не может быть больше ' + this.payload.maximValue)
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
