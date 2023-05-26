import {defineUserConfig, defaultTheme} from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Howie\'s Blog',
    description: '这是我的个人博客',
    base: '/blog/',
    theme: defaultTheme({
        navbar: [
            {
                text: '首页',
                link: '/'
            }
        ]
    })
})
