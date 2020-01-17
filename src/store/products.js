import Img1 from '../assets/1.jpg'
import Img2 from '../assets/2.jpg'
import Img3 from '../assets/3.jpg'

export default {
  state: {
    products: [
      {
        id: 'cat1',
        titleCategory: 'Воздуховоды и фасонные изделия круглого сечения',
        imageCategory: Img1,
        icon: 'mdi-checkbox-blank-circle-outline',
        products: [
          {
            id: 'prod1-cat1',
            titleProduct: 'Воздуховод спирально-навивной',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod1-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 6,
                default: 3
              },
              {
                id: 'param2-prod1-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod2-cat1',
            titleProduct: 'Воздуховод прямошовный',
            imageProduct: Img2,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod2-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 6,
                default: 3
              },
              {
                id: 'param2-prod2-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod3-cat1',
            titleProduct: 'Нипель',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod3-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 50,
                maximValue: 200,
                default: 70
              },
              {
                id: 'param2-prod3-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod4-cat1',
            titleProduct: 'Заглушка',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod4-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 50,
                maximValue: 200,
                default: 70
              },
              {
                id: 'param2-prod4-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod5-cat1',
            titleProduct: 'Врезка прямая',
            imageProduct: Img2,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod5-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 50,
                maximValue: 500,
                default: 70
              },
              {
                id: 'param2-prod5-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod6-cat1',
            titleProduct: 'Врезка седло',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod6-cat1',
                name: 'Диаметр врезки',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 200
              },
              {
                id: 'param2-prod6-cat1',
                name: 'Диаметр воздуховода',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param3-prod6-cat1',
                name: 'Высота',
                sym: 'H',
                unit: 'мм',
                minimValue: 50,
                maximValue: 200,
                default: 70
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod7-cat1',
            titleProduct: 'Муфта',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod7-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 50,
                maximValue: 200,
                default: 70
              },
              {
                id: 'param2-prod7-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod8-cat1',
            titleProduct: 'Переход односторонний',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod8-cat1',
                name: 'Диаметр',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 200
              },
              {
                id: 'param2-prod8-cat1',
                name: 'Диаметр',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param3-prod8-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod9-cat1',
            titleProduct: 'Переход центральный',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod9-cat1',
                name: 'Диаметр',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 200
              },
              {
                id: 'param2-prod9-cat1',
                name: 'Диаметр',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param3-prod9-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod10-cat1',
            titleProduct: 'Тройник под 45°',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod10-cat1',
                name: 'Диаметр',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod10-cat1',
                name: 'Диаметр',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 200
              },
              {
                id: 'param3-prod10-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod11-cat1',
            titleProduct: 'Тройник под 90°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod11-cat1',
                name: 'Диаметр',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod11-cat1',
                name: 'Диаметр',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 200
              },
              {
                id: 'param3-prod11-cat1',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod12-cat1',
            titleProduct: 'Тройник Y-образный',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod12-cat1',
                name: 'Диаметр воздуховода',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod12-cat1',
                name: 'Диаметр врезки 1',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param3-prod12-cat1',
                name: 'Диаметр врезки 2',
                sym: 'D3',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod13-cat1',
            titleProduct: 'Отвод сегментный под 90°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod13-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod14-cat1',
            titleProduct: 'Отвод сегментный под 45°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod14-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod15-cat1',
            titleProduct: 'Отвод сегментный под 30°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod15-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod16-cat1',
            titleProduct: 'Отвод сегментный под 60°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod16-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod17-cat1',
            titleProduct: 'Отвод сегментный под 15°',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod17-cat1',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          }
        ]
      },
      {
        id: 'cat2',
        titleCategory: 'Сетевое оборудование для вентсистем круглого сечения',
        imageCategory: Img2,
        icon: 'mdi-checkbox-multiple-blank-circle',
        products: [
          {
            id: 'prod1-cat2',
            titleProduct: 'Дроссель-клапан (пластиковая ручка)',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod1-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod1-cat2',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1.5,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod2-cat2',
            titleProduct: 'Дроссель-клапан DSV (металлическая ручка)',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod2-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod2-cat2',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1.5,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod3-cat2',
            titleProduct: 'Обратный клапан',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod3-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod3-cat2',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1.5,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod4-cat2',
            titleProduct: 'Зонт крышный',
            imageProduct: Img3,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod4-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod5-cat2',
            titleProduct: 'Дефлектор',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod5-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          },
          {
            id: 'prod6-cat2',
            titleProduct: 'Шумоглушитель',
            imageProduct: Img1,
            // selectFieldsType: 2,
            productParams: [
              {
                id: 'param1-prod6-cat2',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              },
              {
                id: 'param2-prod6-cat2',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 1.5,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type4']
          }
        ]
      },
      {
        id: 'cat3',
        titleCategory: 'Воздуховоды и фасонные изделия прямоугольного сечения',
        imageCategory: Img3,
        icon: 'mdi-checkbox-blank-outline',
        products: [
          {
            id: 'prod1-cat3',
            titleProduct: 'Воздуховод прямоугольный',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod1-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 1000
              },
              {
                id: 'param2-prod1-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod1-cat3',
                name: 'Длина',
                sym: 'L',
                unit: 'м',
                minimValue: 0.1,
                maximValue: 3,
                default: 1.25
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod2-cat3',
            titleProduct: 'Переход центральный прямоугольный',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod2-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 800
              },
              {
                id: 'param2-prod2-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod2-cat3',
                name: 'Сторона',
                sym: 'A1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param4-prod2-cat3',
                name: 'Сторона',
                sym: 'B1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              },
              {
                id: 'param5-prod2-cat3',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 1000
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod3-cat3',
            titleProduct: 'Переход односторонний прямоугольный в круг',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod3-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod3-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod3-cat3',
                name: 'Диаметр',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 1000,
                default: 315
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod4-cat3',
            titleProduct: 'Тройник прямоугольный под 90°',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod4-cat3',
                name: 'Сторона воздуховода',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod4-cat3',
                name: 'Сторона воздуховода',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod4-cat3',
                name: 'Сторона врезки',
                sym: 'C',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param4-prod4-cat3',
                name: 'Сторона врезки',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param5-prod4-cat3',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              },
              {
                id: 'param6-prod4-cat3',
                name: 'Высота врезки',
                sym: 'H',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod5-cat3',
            titleProduct: 'Тройник прямоугольный под 45°',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod5-cat3',
                name: 'Сторона воздуховода',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod5-cat3',
                name: 'Сторона воздуховода',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod5-cat3',
                name: 'Сторона врезки',
                sym: 'C',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param4-prod5-cat3',
                name: 'Сторона врезки',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param5-prod5-cat3',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod6-cat3',
            titleProduct: 'Тройник прямоугольный «орел»',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod6-cat3',
                name: 'Сторона воздуховода',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 1000
              },
              {
                id: 'param2-prod6-cat3',
                name: 'Сторона воздуховода и отводов',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod6-cat3',
                name: 'Сторона отвода 1',
                sym: 'C',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param4-prod6-cat3',
                name: 'Сторона отвода 2',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 700
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod7-cat3',
            titleProduct: 'Тройник прямоугольный «штаны»',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod7-cat3',
                name: 'Сторона воздуховода',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 1000
              },
              {
                id: 'param2-prod7-cat3',
                name: 'Сторона воздуховода и отводов',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod7-cat3',
                name: 'Сторона отвода 1',
                sym: 'C',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param4-prod7-cat3',
                name: 'Сторона отвода 2',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod8-cat3',
            titleProduct: 'Крестовина',
            imageProduct: Img1,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod8-cat3',
                name: 'Сторона воздуховода',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 600
              },
              {
                id: 'param2-prod8-cat3',
                name: 'Сторона воздуховода',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 600
              },
              {
                id: 'param3-prod8-cat3',
                name: 'Сторона врезки 1',
                sym: 'C1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              },
              {
                id: 'param4-prod8-cat3',
                name: 'Сторона врезки 1',
                sym: 'D1',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              },
              {
                id: 'param5-prod8-cat3',
                name: 'Сторона врезки 2',
                sym: 'C2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              },
              {
                id: 'param6-prod8-cat3',
                name: 'Сторона врезки 2',
                sym: 'D2',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod9-cat3',
            titleProduct: 'Отвод прямоугольный (колено) под 90°',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod9-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod9-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod10-cat3',
            titleProduct: 'Отвод прямоугольный (колено) под 45°',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod10-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod10-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod11-cat3',
            titleProduct: 'Отвод прямоугольный (колено) под 30°',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod11-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod11-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod12-cat3',
            titleProduct: 'Отвод прямоугольный (колено) под 60°',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod12-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod12-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod13-cat3',
            titleProduct: 'Отвод прямоугольный (колено) под 15°',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod13-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod13-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod14-cat3',
            titleProduct: 'Заглушка',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod14-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod14-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod15-cat3',
            titleProduct: 'Врезка под прямоугольный воздуховод',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod15-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod15-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod15-cat3',
                name: 'Высота врезки',
                sym: 'H',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod16-cat3',
            titleProduct: 'Врезка под круглый воздуховод',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod16-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 250
              },
              {
                id: 'param2-prod16-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 250
              },
              {
                id: 'param3-prod16-cat3',
                name: 'Высота врезки',
                sym: 'H',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              },
              {
                id: 'param4-prod16-cat3',
                name: 'Диаметр воздуховода',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 400
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod17-cat3',
            titleProduct: 'Адаптер',
            imageProduct: Img2,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod17-cat3',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 400
              },
              {
                id: 'param2-prod17-cat3',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 400
              },
              {
                id: 'param3-prod16-cat3',
                name: 'Диаметр врезки',
                sym: 'D',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 250
              },
              {
                id: 'param4-prod16-cat3',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 0
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          }
        ]
      },
      {
        id: 'cat4',
        titleCategory: 'Сетевое оборудование для вентсистем прямоугольного сечения',
        imageCategory: Img1,
        icon: 'mdi-checkbox-multiple-blank',
        products: [
          {
            id: 'prod1-cat4',
            titleProduct: 'Дроссель-клапан',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod1-cat4',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 1000
              },
              {
                id: 'param2-prod1-cat4',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod1-cat4',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 600
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod2-cat4',
            titleProduct: 'Гравитационный клапан',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod2-cat4',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod2-cat4',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod3-cat4',
            titleProduct: 'Зонт крышный',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod3-cat4',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 300
              },
              {
                id: 'param2-prod3-cat4',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 600
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          },
          {
            id: 'prod4-cat4',
            titleProduct: 'Шумоглушитель',
            imageProduct: Img3,
            // selectFieldsType: 1,
            productParams: [
              {
                id: 'param1-prod4-cat4',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param2-prod4-cat4',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 500
              },
              {
                id: 'param3-prod4-cat4',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 3000,
                default: 600
              }
            ],
            productSelectParams: ['Type1', 'Type2', 'Type3']
          }
        ]
      },
      {
        id: 'cat5',
        titleCategory: 'Прочее',
        imageCategory: Img2,
        icon: 'mdi-view-dashboard-outline',
        products: [
          {
            id: 'prod1-cat5',
            titleProduct: 'Шинорейка №20',
            imageProduct: Img3,
            // selectFieldsType: 3,
            productParams: [
              {
                id: 'param1-prod1-cat5',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 2000
              }
            ],
            productSelectParams: []
          },
          {
            id: 'prod2-cat5',
            titleProduct: 'Шинорейка №30',
            imageProduct: Img3,
            // selectFieldsType: 3,
            productParams: [
              {
                id: 'param1-prod2-cat5',
                name: 'Длина',
                sym: 'L',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 2000
              }
            ],
            productSelectParams: []
          },
          {
            id: 'prod3-cat5',
            titleProduct: 'Фланец №20',
            imageProduct: Img3,
            // selectFieldsType: 3,
            productParams: [
              {
                id: 'param1-prod3-cat5',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 500
              },
              {
                id: 'param2-prod3-cat5',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 500
              }
            ],
            productSelectParams: []
          },
          {
            id: 'prod4-cat5',
            titleProduct: 'Фланец №30',
            imageProduct: Img3,
            // selectFieldsType: 3,
            productParams: [
              {
                id: 'param1-prod4-cat5',
                name: 'Сторона',
                sym: 'A',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 500
              },
              {
                id: 'param2-prod4-cat5',
                name: 'Сторона',
                sym: 'B',
                unit: 'мм',
                minimValue: 100,
                maximValue: 2000,
                default: 500
              }
            ],
            productSelectParams: []
          }
        ]
      }
    ],
    selectFields: [
      {
        idSelectField: 'field-type1',
        type: 'Type1',
        name: 'Толщина металла',
        sym: 's',
        unit: 'мм',
        arraySelectItems: ['0.5', '0.55', '0.6', '0.7', '1.0'],
        default: '0.5'
      },
      {
        idSelectField: 'field-type2',
        type: 'Type2',
        name: 'Тип металла',
        arraySelectItems: ['Оц. сталь', 'Нерж. сталь'],
        default: 'Оц. сталь'
      },
      {
        idSelectField: 'field-type3',
        type: 'Type3',
        name: 'Тип соединения',
        arraySelectItems: ['Фланец №20', 'Фланец №30', 'Нет'],
        default: 'Фланец №20'
      },
      {
        idSelectField: 'field-type4',
        type: 'Type4',
        name: 'Тип соединения',
        arraySelectItems: ['Нет', 'Фланец'],
        default: 'Нет'
      }
    ]
  },
  getters: {
    getProducts: (state) => state.products,
    getSelectFieldByType: (state) => {
      return selectType => {
        return (
          state.selectFields.find(selectField => selectField.type === selectType)
        )
      }
    },
    getListTitleCategories: (state) => {
      let categoryNames = []
      for (let i = 0; i < state.products.length; i++) {
        categoryNames.push({
          categoryName: state.products[i].titleCategory,
          categoryId: state.products[i].id
        })
      }
      return categoryNames
    },
    getListTitleProductsByCategoryId: (state) => {
      return categoryId => {
        let productsNames = []
        let productsInCategory
        productsInCategory = state.products.find(category => category.id === categoryId).products
        for (let i = 0; i < productsInCategory.length; i++) {
          productsNames.push({
            productTitle: productsInCategory[i].titleProduct,
            productId: productsInCategory[i].id
          })
        }
        return productsNames
      }
    },
    getProductById: (state) => {
      return (categoryId, productId) => {
        return state.products.find(category => category.id === categoryId).products.find(product => product.id === productId)
      }
    }
  }
}
