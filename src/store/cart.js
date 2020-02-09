import imageProd1Cat1 from '../assets/catalog/vozduhovody_krug_sech/products/vozduhovod_spiral/vozduhovod-spiral.jpg'
import scheme1Prod1Cat1 from '../assets/catalog/vozduhovody_krug_sech/products/vozduhovod_spiral/vozduhovod-spiral-shema.jpg'
import imageProd23Cat1 from '../assets/catalog/vozduhovody_krug_sech/products/utka-krug-smesh/utka-krug-smesh.jpg'
import scheme1Prod23Cat1 from '../assets/catalog/vozduhovody_krug_sech/products/utka-krug-smesh/utka-krug-smesh-shem.jpg'
import imageProd18Cat3 from '../assets/catalog/vozduhovody_pryam_sech/products/perehod_odnost_pryam/perehod-odnost-pryam.jpg'
import scheme1Prod18Cat3 from '../assets/catalog/vozduhovody_pryam_sech/products/perehod_odnost_pryam/perehod-odnost-pryam-shema-1.jpg'
import scheme2Prod18Cat3 from '../assets/catalog/vozduhovody_pryam_sech/products/perehod_odnost_pryam/perehod-odnost-pryam-shema-2.jpg'
import scheme3Prod18Cat3 from '../assets/catalog/vozduhovody_pryam_sech/products/perehod_odnost_pryam/perehod-odnost-pryam-shema-varianty.jpg'
import imageProd2Cat5 from '../assets/catalog/prochee/products/shina_R30/shyna-R30.jpg'
import imageProd5Cat5 from '../assets/catalog/prochee/products/ugolok_R20/ugolok-R20.jpg'
import imageProd10Cat1 from '../assets/catalog/vozduhovody_krug_sech/products/troynik_krug_45/troynik-krug-45.jpg'
import scheme1Prod10Cat1
  from '../assets/catalog/vozduhovody_krug_sech/products/troynik_krug_45/troynik-krug-45-shem.jpg'

export default {
  state: {
    productsInCart: [
      {
        id: 'prod1',
        titleProduct: 'Воздуховод спирально-навивной',
        shortTitle: 'Воздуховод (Сп)',
        imageProduct: imageProd1Cat1,
        imagesProduct: [imageProd1Cat1, scheme1Prod1Cat1],
        descriptionProduct: 'Спирально-навивные воздуховоды изготавливаются путём скручивания оцинкованной ленты с последующим соединением ленты в замок. Благодаря шву воздуховоды обладают повышенной жёсткостью и имеют небольшой вес.',
        shortDescriptionType: 'Type1',
        sequence: ['d', 'L'],
        productParams: [
          {
            id: 'param1-prod1-cat1',
            name: 'Длина',
            sym: 'L',
            unit: 'м',
            minimValue: 0.5,
            maximValue: 'none',
            decimal: true,
            valid: true,
            value: 1.65
          },
          {
            id: 'param2-prod1-cat1',
            name: 'Диаметр',
            sym: 'd',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 315
          }
        ],
        typesSelects: ['Type4', 'Type5'],
        productSelectParams: [
          {
            arraySelectItems: ['Фланец R20', 'Фланец R30', 'Нет'],
            idSelectField: 'field-type4',
            name: 'Тип соединения',
            type: 'Type4',
            value: 'Нет'
          },
          {
            arraySelectItems: ['Да', 'Нет'],
            idSelectField: 'field-type5',
            name: 'Изготовить окожушку',
            type: 'Type5',
            value: 'Нет'
          }
        ],
        quantity: 2
      },
      {
        id: 'prod2',
        titleProduct: 'Утка круглого сечения со смещением',
        shortTitle: 'Утка со смещ.(Кр)',
        imageProduct: imageProd23Cat1,
        imagesProduct: [imageProd23Cat1, scheme1Prod23Cat1],
        descriptionProduct: 'Утки – специальные фасонные изделия, которые созданы для соединения двух разноуровневых воздуховодов или же когда воздуховоды находятся правее либо левее друг друга.',
        shortDescriptionType: 'Type1',
        sequence: ['d1', 'd2', 'h', 'f', 'L'],
        productParams: [
          {
            id: 'param1-prod23-cat1',
            name: 'Диаметр',
            sym: 'd1',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 250
          },
          {
            id: 'param2-prod23-cat1',
            name: 'Диаметр',
            sym: 'd2',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 355
          },
          {
            id: 'param3-prod23-cat1',
            name: 'Длина',
            sym: 'L',
            unit: 'мм',
            minimValue: 'none',
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 800
          },
          {
            id: 'param4-prod23-cat1',
            name: 'Высота смещения',
            sym: 'h',
            unit: 'мм',
            minimValue: 'none',
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 155
          },
          {
            id: 'param5-prod23-cat1',
            name: 'Осевое смещение',
            sym: 'f',
            unit: 'мм',
            minimValue: 'none',
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 50
          }
        ],
        typesSelects: ['Type1', 'Type2', 'Type4', 'Type5'],
        productSelectParams: [
          {
            arraySelectItems: ['0.5', '0.55', '0.6', '0.7', '1.0'],
            idSelectField: 'field-type1',
            name: 'Толщина металла',
            sym: 't',
            type: 'Type1',
            unit: 'мм',
            value: '0.55'
          },
          {
            arraySelectItems: ['Оц. сталь', 'Нерж. сталь'],
            idSelectField: 'field-type2',
            name: 'Тип металла',
            type: 'Type2',
            value: 'Нерж. сталь'
          },
          {
            arraySelectItems: ['Фланец R20', 'Фланец R30', 'Нет'],
            idSelectField: 'field-type4',
            name: 'Тип соединения',
            type: 'Type4',
            value: 'Фланец R20'
          },
          {
            arraySelectItems: ['Да', 'Нет'],
            idSelectField: 'field-type5',
            name: 'Изготовить окожушку',
            type: 'Type5',
            value: 'Да'
          }
        ],
        quantity: 1
      },
      {
        id: 'prod3',
        titleProduct: 'Переход односторонний прямоугольный',
        shortTitle: 'Переход односторонний (Пр)',
        imageProduct: imageProd18Cat3,
        imagesProduct: [imageProd18Cat3, scheme1Prod18Cat3, scheme2Prod18Cat3, scheme3Prod18Cat3],
        descriptionProduct: 'Для соединения двух воздуховодов прямоугольного сечения разных размеров применяется переход прямоугольного сечения. Переход прямоугольного сечения бывает нескольких типов. Центральный – когда оси воздуховодов совпадают, односторонний – когда один из воздуховодов вплотную смещён к одной из сторон и переход прямоугольного сечения со смещением – когда оси воздуховодов не совпадают и при этом один из воздуховодов имеет смещение от одной или двух сторон.',
        shortDescriptionType: 'Type8',
        sequence: ['a', 'b', 'c', 'd'],
        productParams: [
          {
            id: 'param1-prod18-cat3',
            name: 'Сторона',
            sym: 'a',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 500
          },
          {
            id: 'param2-prod18-cat3',
            name: 'Сторона',
            sym: 'b',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 700
          },
          {
            id: 'param3-prod18-cat3',
            name: 'Сторона',
            sym: 'c',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 300
          },
          {
            id: 'param4-prod18-cat3',
            name: 'Сторона',
            sym: 'd',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 200
          }
        ],
        typesSelects: ['Type1', 'Type2', 'Type3', 'Type5', 'Type6'],
        productSelectParams: [
          {
            arraySelectItems: ['0.5', '0.55', '0.6', '0.7', '1.0'],
            idSelectField: 'field-type1',
            name: 'Толщина металла',
            sym: 't',
            type: 'Type1',
            unit: 'мм',
            value: '0.7'
          },
          {
            arraySelectItems: ['Оц. сталь', 'Нерж. сталь'],
            idSelectField: 'field-type2',
            name: 'Тип металла',
            type: 'Type2',
            value: 'Оц. сталь'
          },
          {
            arraySelectItems: ['Фланец R20', 'Фланец R30', 'Нет'],
            idSelectField: 'field-type3',
            name: 'Тип соединения',
            type: 'Type3',
            value: 'Фланец R30'
          },
          {
            arraySelectItems: ['Да', 'Нет'],
            idSelectField: 'field-type5',
            name: 'Изготовить окожушку',
            type: 'Type5',
            value: 'Нет'
          },
          {
            arraySelectItems: ['Да', 'Нет'],
            idSelectField: 'field-type6',
            name: 'Вариант исполнения',
            type: 'Type6',
            value: 'Тип В'
          }
        ],
        quantity: 1
      },
      {
        id: 'prod4',
        titleProduct: 'Шина R30',
        shortTitle: 'Шина R30',
        imageProduct: imageProd2Cat5,
        imagesProduct: [imageProd2Cat5],
        descriptionProduct: 'Шина монтажная используется для изготовления фланцев и является ребром жесткости при соединении в воздуховодах прямоугольного сечения и фасонных изделий прямоугольной формы.',
        shortDescriptionType: 'Type1',
        sequence: ['L'],
        productParams: [
          {
            id: 'param1-prod2-cat5',
            name: 'Длина',
            sym: 'L',
            unit: 'мм',
            minimValue: 'none',
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 1500
          }
        ],
        typesSelects: [],
        productSelectParams: [],
        quantity: 10
      },
      {
        id: 'prod5',
        titleProduct: 'Уголок соединительный R20',
        shortTitle: 'Уголок R20',
        imageProduct: imageProd5Cat5,
        imagesProduct: [imageProd5Cat5],
        descriptionProduct: 'Уголок соединительный используется для соединения шин между собой при изготовлении фланцев.',
        shortDescriptionType: 'Type1',
        sequence: [],
        productParams: [],
        typesSelects: [],
        productSelectParams: [],
        quantity: 100
      },
      {
        id: 'prod6',
        titleProduct: 'Тройник круглого сечения под 45°',
        shortTitle: 'Тройник (Кр)',
        angle: '45°',
        imageProduct: imageProd10Cat1,
        imageAndSchemesProduct: [imageProd10Cat1, scheme1Prod10Cat1],
        description: 'Тройник круглого сечения под 45° предназначен для разветвления линии воздуховодов (разветвления одного потока воздуха на два или объединения двух потоков в один).',
        shortDescriptionType: 'Type3',
        sequence: ['D', 'd'],
        productParams: [
          {
            id: 'param1-prod10-cat1',
            name: 'Диаметр воздуховода',
            sym: 'D',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 500
          },
          {
            id: 'param2-prod10-cat1',
            name: 'Диаметр врезки',
            sym: 'd',
            unit: 'мм',
            minimValue: 100,
            maximValue: 'none',
            decimal: false,
            valid: true,
            value: 315
          }
        ],
        typesSelects: ['Type1', 'Type2', 'Type4', 'Type5'],
        productSelectParams: [
          {
            arraySelectItems: ['0.5', '0.55', '0.6', '0.7', '1.0'],
            idSelectField: 'field-type1',
            name: 'Толщина металла',
            sym: 't',
            type: 'Type1',
            unit: 'мм',
            value: '0.7'
          },
          {
            arraySelectItems: ['Оц. сталь', 'Нерж. сталь'],
            idSelectField: 'field-type2',
            name: 'Тип металла',
            type: 'Type2',
            value: 'Оц. сталь'
          },
          {
            arraySelectItems: ['Фланец R20', 'Фланец R30', 'Нет'],
            idSelectField: 'field-type4',
            name: 'Тип соединения',
            type: 'Type4',
            value: 'Нет'
          },
          {
            arraySelectItems: ['Да', 'Нет'],
            idSelectField: 'field-type5',
            name: 'Изготовить окожушку',
            type: 'Type5',
            value: 'Нет'
          }
        ]
      }
    ]
  },
  mutations: {
    DECREMENT (state, id) {
      // for (let i = 0; i < state.cartItemList.length; i++) {
      //   if (state.cartItemList[i].id === id) {
      //     if (state.cartItemList[i].quantity > 1) {
      //       state.cartItemList[i].quantity--
      //     } else {
      //       state.cartItemList[i].quantity = 1
      //     }
      //   }
      // }
    },
    INCREMENT (state, id) {
      // for (let i = 0; i < state.cartItemList.length; i++) {
      //   if (state.cartItemList[i].id === id) {
      //     if (state.cartItemList[i].quantity < 100) {
      //       state.cartItemList[i].quantity++
      //     } else {
      //       state.cartItemList[i].quantity = 100
      //     }
      //   }
      // }
    },
    REMOVE_PRODUCT (state, id) {
      // let index = state.cartItemList.findIndex(product => product.id === id)
      // state.cartItemList.splice(index, 1)
    },
    SAVE_CHANGES (state, { id, editedParams, editedQuantity, editedSelectParams }) {
      // const updateProduct = state.cartItemList.find(product => {
      //   return product.id === id
      // })
      // updateProduct.quantity = editedQuantity
      // updateProduct.productParams = editedParams
      // updateProduct.productSelectParams = editedSelectParams
    },
    ADD_PRODUCT_TO_CART (state, payload) {
      state.productsInCart.push(payload)
    }
  },
  actions: {
    DECREMENT ({ commit }, id) {
      commit('DECREMENT', id)
    },
    INCREMENT ({ commit }, id) {
      commit('INCREMENT', id)
    },
    REMOVE_PRODUCT ({ commit }, id) {
      commit('REMOVE_PRODUCT', id)
    },
    SAVE_CHANGES ({ commit }, payload) {
      commit('SAVE_CHANGES', payload)
    },
    ADD_PRODUCT_TO_CART ({ commit }, payload) {
      commit('ADD_PRODUCT_TO_CART', payload)
    }
  },
  getters: {
    getProductsInCart: (state) => {
      return state.productsInCart
    },
    getCountProductsInCart: (state) => {
      return state.productsInCart.length
    }
  }
}
