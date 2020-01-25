// import Img1 from '../assets/1.jpg'
// import Img2 from '../assets/2.jpg'
// import Img3 from '../assets/3.jpg'

// function strRand () {
//   let result = ''
//   let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
//   let maxPosition = words.length - 1
//   for (let i = 0; i < 5; ++i) {
//     let position = Math.floor(Math.random() * maxPosition)
//     result = result + words.substring(position, position + 1)
//   }
//   return result
// }

export default {
  state: {
    cartItemList: [
      {
        id: 'prod1',
        titleProduct: 'Воздуховод спирально-навивной',
        // imageProduct: Img1,
        quantity: 5,
        productParams: [
          {
            id: 'param1-prod1',
            name: 'Длина',
            sym: 'L',
            unit: 'м',
            minimValue: 0.1,
            maximValue: 6,
            value: 1.25
          },
          {
            id: 'param2-prod1',
            name: 'Диаметр',
            sym: 'D',
            unit: 'мм',
            minimValue: 100,
            maximValue: 1000,
            value: 315
          }
        ],
        productSelectParams: [
          {
            id: 'select1-prod1',
            type: 'Type1',
            name: 'Толщина металла',
            sym: 's',
            unit: 'мм',
            value: '0.5'
          },
          {
            id: 'select2-prod1',
            type: 'Type2',
            name: 'Тип металла',
            value: 'Оц. сталь'
          },
          {
            id: 'select3-prod1',
            type: 'Type4',
            name: 'Тип соединения',
            value: 'Нет'
          }
        ]
      },
      {
        id: 'prod2',
        titleProduct: 'Дроссель-клапан',
        // imageProduct: Img2,
        quantity: 2,
        productParams: [
          {
            id: 'param1-prod2',
            name: 'Сторона',
            sym: 'A',
            unit: 'мм',
            minimValue: 100,
            maximValue: 3000,
            value: 600
          },
          {
            id: 'param2-prod2',
            name: 'Сторона',
            sym: 'B',
            unit: 'мм',
            minimValue: 100,
            maximValue: 3000,
            value: 500
          },
          {
            id: 'param3-prod2',
            name: 'Длина',
            sym: 'L',
            unit: 'мм',
            minimValue: 100,
            maximValue: 3000,
            value: 800
          }
        ],
        productSelectParams: [
          {
            id: 'select1-prod2',
            type: 'Type1',
            name: 'Толщина металла',
            sym: 's',
            unit: 'мм',
            value: '0.7'
          },
          {
            id: 'select2-prod2',
            type: 'Type2',
            name: 'Тип металла',
            value: 'Оц. сталь'
          },
          {
            id: 'select3-prod2',
            type: 'Type3',
            name: 'Тип соединения',
            value: 'Фланец №30'
          }
        ]
      },
      {
        id: 'prod3',
        titleProduct: 'Фланец №30',
        // imageProduct: Img3,
        quantity: 10,
        productParams: [
          {
            id: 'param1-prod3',
            name: 'Сторона',
            sym: 'A',
            unit: 'мм',
            minimValue: 100,
            maximValue: 2000,
            value: 240
          },
          {
            id: 'param2-prod3',
            name: 'Сторона',
            sym: 'B',
            unit: 'мм',
            minimValue: 100,
            maximValue: 2000,
            value: 380
          }
        ],
        productSelectParams: []
      }
    ]
  },
  mutations: {
    DECREMENT (state, id) {
      for (let i = 0; i < state.cartItemList.length; i++) {
        if (state.cartItemList[i].id === id) {
          if (state.cartItemList[i].quantity > 1) {
            state.cartItemList[i].quantity--
          } else {
            state.cartItemList[i].quantity = 1
          }
        }
      }
    },
    INCREMENT (state, id) {
      for (let i = 0; i < state.cartItemList.length; i++) {
        if (state.cartItemList[i].id === id) {
          if (state.cartItemList[i].quantity < 100) {
            state.cartItemList[i].quantity++
          } else {
            state.cartItemList[i].quantity = 100
          }
        }
      }
    },
    REMOVE_PRODUCT (state, id) {
      let index = state.cartItemList.findIndex(product => product.id === id)
      state.cartItemList.splice(index, 1)
    },
    SAVE_CHANGES (state, { id, editedParams, editedQuantity, editedSelectParams }) {
      const updateProduct = state.cartItemList.find(product => {
        return product.id === id
      })
      updateProduct.quantity = editedQuantity
      updateProduct.productParams = editedParams
      updateProduct.productSelectParams = editedSelectParams
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
    }
  },
  getters: {
    getProductsInCart: (state) => {
      return state.cartItemList
    },
    getCartCount: (state) => {
      return state.cartItemList.length
    }
    // getProductById: (state) => {
    //   return productId => {
    //     return (
    //       state.cartItemList.find(product => product.id === productId)
    //     )
    //   }
    // }
  }
}
