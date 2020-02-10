<template>
  <v-list-item-subtitle>{{ this.symbolDescription }}</v-list-item-subtitle>
</template>

<script>
export default {
  name: 'SymbolDescription',
  props: {
    itemInCart: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      itemInCartProductParams: [],
      itemInCartProductSelectParams: [],
      itemInCartDescriptionParam: [],
      itemInCartDescriptionSelectParams: [],
      symbolDescription: ''
    }
  },
  mounted () {
    this.makeSymbolDescription(this.itemInCart)
  },
  methods: {
    makeShortDescriptionParam (type, params, sequence, angle) {
      let arrayDescriptionParam = []
      let shortDescriptionParam = ''
      if (sequence.length > 1) {
        for (let i = 0; i < sequence.length; i++) {
          for (let j = 0; j < params.length; j++) {
            if (sequence[i] === params[j].sym) {
              switch (type) {
                case 'Type1': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].value)
                  }
                  break
                }
                case 'Type2': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type3': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].sym + ' ' + params[j].value + ' / ')
                  } else if (i > 0 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ')
                  } else {
                    arrayDescriptionParam.push(params[j].sym + ' ' + params[j].value + ' / ' + angle)
                  }
                  break
                }
                case 'Type4': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type5': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type6': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type7': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type8': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type9': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  }
                  break
                }
                case 'Type10': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 1 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type11': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 1 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type12': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  }
                  break
                }
                case 'Type13': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 3 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type14': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 5) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i > 5 && i < sequence.length - 1) {
                    arrayDescriptionParam.push(' / ' + params[j].sym + ' ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                case 'Type15': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + angle)
                  }
                  break
                }
                case 'Type16': {
                  if (i === 0) {
                    arrayDescriptionParam.push(' - ' + params[j].value)
                  } else if (i === 1) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 2) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 3) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else if (i === 4) {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  } else if (i === 5) {
                    arrayDescriptionParam.push(' X ' + params[j].value)
                  } else {
                    arrayDescriptionParam.push(' / ' + params[j].value)
                  }
                  break
                }
                default:
                  arrayDescriptionParam.push('oops')
              }
            }
          }
        }
      } else if (sequence.length === 1) {
        switch (type) {
          case 'Type1' || 'Type2': {
            arrayDescriptionParam.push(' - ' + params[0].sym + ' ' + params[0].value)
            break
          }
          case 'Type3': {
            arrayDescriptionParam.push(' - ' + params[0].sym + ' ' + params[0].value + ' / ' + angle)
            break
          }
          default:
        }
      } else {
        arrayDescriptionParam = []
      }
      shortDescriptionParam = arrayDescriptionParam.join('')
      return shortDescriptionParam
    },
    initSelectParamValue (arrayParams, paramName) {
      let param = arrayParams.find(param => param.name === paramName)
      return param !== 'undefined' ? param : ''
    },
    makeShortTypeMetal (typeMetal) {
      let shortTypeMetal
      if (typeMetal.value === 'Оц. сталь') {
        shortTypeMetal = 'оц.ст. '
      } else if (typeMetal.value === 'Нерж. сталь') {
        shortTypeMetal = 'нерж.ст. '
      }
      return shortTypeMetal
    },
    makeShortConnectionType (connectionType) {
      let shortConnectionType
      if (connectionType.value === 'Фланец R20') {
        shortConnectionType = 'R20'
      } else if (connectionType.value === 'Фланец R30') {
        shortConnectionType = 'R30'
      } else {
        shortConnectionType = ''
      }
      return shortConnectionType
    },
    makeShortDescriptionSelectParam (typesSelects, selectParams) {
      let arrayDescriptionSelectParam = []
      let shortDescriptionSelectParam = ''
      if ((typesSelects.includes('Type4')) && (typesSelects.includes('Type5')) && (!typesSelects.includes('Type1')) && (!typesSelects.includes('Type2')) && (!typesSelects.includes('Type3')) && (!typesSelects.includes('Type6')) && (!typesSelects.includes('Type7'))) {
        // Type4 Type5 / Тип соединения / Изготовить окожушку
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
        if (connectionType.value !== 'Нет' && casing.value !== 'Нет') {
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' ( ' + shortConnectionType + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else if (connectionType.value !== 'Нет' && casing.value === 'Нет') {
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' ( ' + shortConnectionType + ' )')
        } else if (connectionType.value === 'Нет' && casing.value !== 'Нет') {
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else {
          arrayDescriptionSelectParam.push('')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type4')) && (typesSelects.includes('Type5')) && (!typesSelects.includes('Type3')) && (!typesSelects.includes('Type6')) && (!typesSelects.includes('Type7'))) {
        // Type1 Type2 Type4 Type5 / Толщина металла / Тип металла / Тип соединения / Изготовить окожушку
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
        if (connectionType.value !== 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else if (connectionType.value !== 'Нет' && casing.value === 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
        } else if (connectionType.value === 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type4')) && (!typesSelects.includes('Type3')) && (!typesSelects.includes('Type5')) && (!typesSelects.includes('Type6')) && (!typesSelects.includes('Type7'))) {
        // Type1 Type2 Type4 / Толщина металла / Тип металла / Тип соединения
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        if (connectionType.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type3')) && (typesSelects.includes('Type5')) && (!typesSelects.includes('Type4')) && (!typesSelects.includes('Type6')) && (!typesSelects.includes('Type7'))) {
        // Type1 Type2 Type3 Type5 / Толщина металла / Тип металла / Тип соединения / Изготовить окожушку
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
        if (connectionType.value !== 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else if (connectionType.value !== 'Нет' && casing.value === 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
        } else if (connectionType.value === 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type3')) && (typesSelects.includes('Type5')) && (typesSelects.includes('Type6')) && (!typesSelects.includes('Type4')) && (!typesSelects.includes('Type7'))) {
        // Type1 Type2 Type3 Type5 Type6 / Толщина металла / Тип металла / Тип соединения / Изготовить окожушку / Вариант исполнения
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
        let variation = this.initSelectParamValue(selectParams, 'Вариант исполнения')
        if (connectionType.value !== 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else if (connectionType.value !== 'Нет' && casing.value === 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
        } else if (connectionType.value === 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type3')) && (!typesSelects.includes('Type4')) && (!typesSelects.includes('Type5')) && (!typesSelects.includes('Type6')) && (!typesSelects.includes('Type7'))) {
        // Type1 Type2 Type3 / Толщина металла / Тип металла / Тип соединения
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        if (connectionType.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType + ' )')
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value + ' )')
        }
      } else if ((typesSelects.includes('Type1')) && (typesSelects.includes('Type2')) && (typesSelects.includes('Type3')) && (typesSelects.includes('Type5')) && (typesSelects.includes('Type7')) && (!typesSelects.includes('Type4')) && (!typesSelects.includes('Type6'))) {
        // Type1 Type2 Type3 Type5 Type7 / Толщина металла / Тип металла / Тип соединения / Изготовить окожушку / Вариант исполнения
        let thicknessMetal = this.initSelectParamValue(selectParams, 'Толщина металла')
        let typeMetal = this.initSelectParamValue(selectParams, 'Тип металла')
        let connectionType = this.initSelectParamValue(selectParams, 'Тип соединения')
        let casing = this.initSelectParamValue(selectParams, 'Изготовить окожушку')
        let variation = this.initSelectParamValue(selectParams, 'Вариант исполнения')
        if (connectionType.value !== 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else if (connectionType.value !== 'Нет' && casing.value === 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          let shortConnectionType = this.makeShortConnectionType(connectionType)
          arrayDescriptionSelectParam.push(' / ' + shortConnectionType)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
        } else if (connectionType.value === 'Нет' && casing.value !== 'Нет') {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
          let shortCasing = ' + окожушка'
          arrayDescriptionSelectParam.push(shortCasing)
        } else {
          let shortTypeMetal = this.makeShortTypeMetal(typeMetal)
          arrayDescriptionSelectParam.push(' ( ' + shortTypeMetal)
          arrayDescriptionSelectParam.push(thicknessMetal.value)
          arrayDescriptionSelectParam.push(' / ' + variation.value + ' )')
        }
      } else {
        arrayDescriptionSelectParam.push('')
      }
      if (arrayDescriptionSelectParam.length > 0) {
        shortDescriptionSelectParam = arrayDescriptionSelectParam.join('')
      } else {
        shortDescriptionSelectParam = ''
      }
      return shortDescriptionSelectParam
    },
    makeSymbolDescription (itemInCart) {
      let type = itemInCart.shortDescriptionType
      let shortTitle = itemInCart.shortTitle
      let params = itemInCart.productParams
      let sequence = itemInCart.sequence
      let angle = itemInCart.angle ? itemInCart.angle : 0
      let typesSelects = itemInCart.typesSelects
      let selectParams = itemInCart.productSelectParams
      let shortDescriptionParam = this.makeShortDescriptionParam(type, params, sequence, angle)
      let shortDescriptionSelectParam = this.makeShortDescriptionSelectParam(typesSelects, selectParams)
      this.symbolDescription = shortTitle + shortDescriptionParam + shortDescriptionSelectParam
    }
  }
}
</script>

<style scoped>

</style>
