<template>
  <v-container>
    <v-form style="max-width: 400px">
      <v-text-field
        label="Имя"
        required
        v-model="firstName"
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
        :error-messages="firstNameErrors"
      ></v-text-field>
      <v-text-field
        label="Фамилия"
        v-model="lastName"
      ></v-text-field>
      <v-text-field
        label="Телефон"
        required
        v-model="phone"
        @input="$v.phone.$touch()"
        @blur="$v.phone.$touch()"
        :error-messages="phoneErrors"
      ></v-text-field>
      <v-text-field
        label="E-mail"
        required
        v-model="email"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
        :error-messages="emailErrors"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
import { minLength, numeric, required, email } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'

export default {
  name: 'DataClient',
  data () {
    return {
      currentDate: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  },
  mounted () {
    this.currentDate = this.getDataClient.currentDate
    this.firstName = this.getDataClient.firstName
    this.lastName = this.getDataClient.lastName
    this.phone = this.getDataClient.phone
    this.email = this.getDataClient.email
  },
  validations () {
    return {
      firstName: {
        required,
        minLength: minLength(3)
      },
      phone: {
        required,
        numeric
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {
    getCurrentDate () {
      let d = new Date()
      return ('0' + d.getDate()).slice(-2) + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + d.getFullYear()
    },
    saveDataClient () {
      let currentDate = this.getCurrentDate()
      let firstName = this.firstName
      let lastName = this.lastName
      let phone = this.phone
      let email = this.email
      this.$store.dispatch('SAVE_DATA_CLIENT', { currentDate, firstName, lastName, phone, email })
    }
  },
  computed: {
    ...mapGetters([
      'getDataClient'
    ]),
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors
      !this.$v.firstName.required && errors.push('Поле не может быть пустым')
      !this.$v.firstName.minLength && errors.push('Имя должно содержать минимум 3 символа')
      return errors
    },
    phoneErrors () {
      const errors = []
      if (!this.$v.phone.$dirty) return errors
      !this.$v.phone.required && errors.push('Поле не может быть пустым')
      !this.$v.phone.numeric && errors.push('Здесь могут быть только из цифры')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.required && errors.push('Поле не может быть пустым')
      !this.$v.email.email && errors.push('Введите корректный E-mail')
      return errors
    },
    formCompleted () {
      return !this.$v.$invalid
    }
  },
  watch: {
    'formCompleted': {
      handler (val) {
        if (val) {
          this.$emit('updateCompleted', val)
        } else {
          this.$emit('updateCompleted', val)
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
