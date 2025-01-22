import { defineConfig } from 'vitepress'
// import logo from '/assets/lab_logo.svg'
// console.log(logo)
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  lang: 'ru',
  title: "Палеоботанический семинар",
  description: "Тезисы Палеоботанического онлайн семинара",
  ignoreDeadLinks: true,
  // locales: {
  //   root: {
  //     label: 'Russian',
  //     lang: 'ru',
  //     link: '/'
  //   },
  //   en: {
  //     label: 'English',
  //     lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
  //     link: '/en' // default /fr/ -- shows on navbar translations menu, can be external

  //     // other locale specific properties...
  //   }
  // },  
  themeConfig: {
    outlineTitle: 'Содержание',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Ничего не найдено',
                resetButtonTitle: 'Очистить',
                footer: {
                  selectText: 'Выбрать',
                  navigateText: 'Навигация'
                }
              }
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'paleobotany.ru', link: 'https://paleobotany.ru/' },
     
    ],

    sidebar: [
      {
        text: 'Тезисы',
        items: [
          { text: '2021 год', link: '/book-2021' },
          { text: '2022 год', link: '/book-2022' },
          { text: '2023 год', link: '/book-2023' },
          { text: '2024 год', link: '/book-2024' }
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    docFooter: {
      prev: 'Предыдущий год',
      next: 'Следующий год'
    },
    socialLinks: [
      { icon: 'youtube', link: 'https://www.youtube.com/@paleobotany_seminar' }
    ]
  }
})
