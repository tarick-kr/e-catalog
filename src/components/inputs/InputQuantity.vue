<template>
  <v-text-field
    :label="this.label"
    :hint="this.hintText"
    persistent-hint
    required
    :value="this.data"
    @input ="onChangeValue($event)"
    :error="this.activated && !this.validValue"
  />
</template>

<script>
export default {
  name: 'InputQuantity',
  data () {
    return {
      label: '',
      hint: '',
      patternValidQuantity: /^(?:[1-9]\d*|\d)$/
      // hintDiv: ''
    }
  },
  props: {
    data: {
      type: [Number, String],
      required: false
    },
    activated: {
      type: Boolean,
      required: true
    }
  },
  mounted () {
    this.label = 'Количество, шт'
    // this.hintDiv = this.$el.getElementsByClassName('v-messages theme--light')[0]
    // console.log(this.hintDiv)
  },
  methods: {
    onChangeValue (e) {
      if (!this.activated) {
        this.$emit('onUpdate', {
          activated: true,
          newValue: e,
          valid: this.patternValidQuantity.test(String(e)) && e > 0
        })
      } else {
        this.$emit('onUpdate', {
          newValue: e,
          valid: this.patternValidQuantity.test(String(e)) && e > 0
        })
      }
    }
  },
  computed: {
    validValue () {
      return this.patternValidQuantity.test(String(this.data)) && this.data > 0
      // if (this.patternValidQuantity.test(String(this.data)) && this.data > 0) {
      //   if (this.hintDiv.classList.contains('error--text')) {
      //     this.hintDiv.classList.remove('error--text')
      //   }
      //   return true
      // } else {
      //   this.hintDiv.classList.add('error--text')
      //   return false
      // }
    },
    hintText () {
      if ((this.activated && this.data === 0) || (this.activated && this.data < 0)) {
        return 'количество не может быть меньше 1'
      } else if (this.activated && this.data === '') {
        return 'поле не может быть пустым'
      } else {
        return ''
      }
    }
  }
}
</script>

<style scoped>

</style>
