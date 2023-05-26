import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    base: "/blog/",

    locales: {
        "/": {
            lang: "en-US",
            title: "Howie's Blog",
            description: "This is my blog.",
        },
        "/zh/": {
            lang: "zh-CN",
            title: "Howie 的博客",
            description: "这是我的个人博客",
        },
    },

    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
