import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue'

export default {
  extends: DefaultTheme,
  // переопределяем макет с помощью компонента-обёртки, который
  // вводит слоты
  Layout: MyLayout
}