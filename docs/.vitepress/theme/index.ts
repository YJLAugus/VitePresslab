import DefaultTheme from 'vitepress/theme'
// import './custom.css'
import './rainbow.css'
import './overrides.css'
import './vars.css'
import { watch } from 'vue'
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    if (typeof window !== 'undefined') {
      watch(
        () => router.route.path,
        () => {
          updateHomePageStyle(router.route.path === '/')
        },
        { immediate: true }
      )
    }
  },
}

function updateHomePageStyle(isHome: boolean) {
  if (isHome) {
    if (homePageStyle) return
    
    // 添加 rainbow 类到 html 元素
    document.documentElement.classList.add('rainbow')
    
    // 创建样式元素确保动画运行
    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
      :root {
        animation: rainbow 40s linear infinite;
      }
    `
    document.head.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return
    
    // 移除 rainbow 类
    document.documentElement.classList.remove('rainbow')
    
    homePageStyle.remove()
    homePageStyle = undefined
  }
}
