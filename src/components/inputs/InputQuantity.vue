<template>
  <v-text-field
    :label="this.label"
    v-model="quantityValue"
    required
    @input="updateInput($event)"
    @blur="$v.quantityValue.$touch()"
    :error-messages="quantityErrors"
    outlined
    dense
  />
</template>

<script>
import { required, minValue, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'InputQuantity',
  data () {
    return {
      label: 'Количество, шт',
      quantityValue: ''
    }
  },
  props: {
  },
  mounted () {
  },
  validations () {
    return {
      quantityValue: {
        required,
        minValue: minValue(1),
        numeric
      }
    }
  },
  methods: {
    updateInput (e) {
      this.$v.quantityValue.$touch()
      this.onChangeValue(e)
    },
    onChangeValue (e) {
      this.$emit('onUpdate', {
        newValue: e,
        valid: this.validValue
      })
    },
    reset () {
      this.$nextTick(() => { this.$v.$reset() })
      this.quantityValue = ''
    }
  },
  computed: {
    quantityErrors () {
      const errors = []
      if (!this.$v.quantityValue.$dirty) return errors
      !this.$v.quantityValue.required && errors.push('Поле не может быть пустым')
      !this.$v.quantityValue.numeric && errors.push('Введите корректное значение')
      !this.$v.quantityValue.minValue && errors.push('Значение не может быть меньше 1')
      return errors
    },
    validValue () {
      return this.quantityErrors.length === 0
    }
  }
}
</script>

<style scoped>

</style>
