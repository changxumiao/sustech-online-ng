let ogprefix = 'og: http://ogp.me/ns#'
let title = '南科手册'
let description = 'Online manual for sustecher'
let color = '#49BF7C'
let author = 'sustech.online'
const { defaultTheme } = require('vuepress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { gitPlugin } = require('@vuepress/plugin-git')
const { tocPlugin } = require('@vuepress/plugin-toc')
const { sitemapPlugin } = require("vuepress-plugin-sitemap2");


module.exports = {
    locales: {
        '/': {
            title: '南科手册',
            lang: 'zh-CN',
            description: 'Online manual for sustecher',
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo-assets/touch/homescreen192.png` }],
        ['meta', { name: 'theme-color', content: color }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
        ['meta', {
            prefix: ogprefix,
            property: 'og:image',
            content: 'https://mirrors.sustech.edu.cn/git/sustech-online/sustech-online-ng/-/raw/master/docs/assets/og-image.png'
        }],
        ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/logo-assets/touch/homescreen168.png' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo-assets/touch/homescreen144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: color }],
        ['meta', { name: 'google-site-verification', content: 'Av-srANCmFA_yZ8Iasa1yQsIPJCF_zlP5AoD35m6_Ww' }],
        ['script', {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-1BQBXDGY3R'
        }],
        ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1BQBXDGY3R');
    `],
        ['script', { src: '/wx_helper.js' }],
        ['script', { src: 'https://res.wx.qq.com/open/js/jweixin-1.6.0.js' }],
        ['script', { src: 'https://lib.baomitu.com/jquery/3.6.0/jquery.min.js' }],
        ['script', { src: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.js' }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://lib.baomitu.com/fancybox/3.5.7/jquery.fancybox.min.css'
        }],
        ['script', { src: 'https://lib.baomitu.com/datatables/1.10.21/js/jquery.dataTables.min.js' }],
        ['link', {
            rel: 'stylesheet',
            type: 'text/css',
            href: 'https://lib.baomitu.com/datatables/1.10.21/css/jquery.dataTables.min.css'
        }]
    ],
    plugins: [
        // [
        //   '@vuepress/plugin-search',
        //   {
        //     locales: {
        //       '/': {
        //         placeholder: 'Search',
        //       },
        //       '/zh/': {
        //         placeholder: '搜索',
        //       },
        //     },
        //   },
        // ],
        // [
        //     '@vuepress/plugin-docsearch',
        //     {
        //         apiKey: '03fed04db0cb1570c99f89739e745ed6',
        //         indexName: 'sustech',
        //         locales: {
        //             '/': {
        //                 placeholder: '搜索手册',
        //             },
        //         },
        //     },
        // ],
        docsearchPlugin({
            appId: '6KECEJUGJH',
            apiKey: '9a5c8aa7cb2d5d32ebd66790e1a84789',
            indexName: 'sustech-online-keys',
            locales: {
                '/': {
                    placeholder: '搜索手册',
                    translations: {
                        button: {
                            buttonText: '搜索手册',
                            buttonAriaLabel: '搜索手册',
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: '清除查询条件',
                                resetButtonAriaLabel: '清除查询条件',
                                cancelButtonText: '取消',
                                cancelButtonAriaLabel: '取消',
                            },
                            startScreen: {
                                recentSearchesTitle: '搜索历史',
                                noRecentSearchesText: '没有搜索历史',
                                saveRecentSearchButtonTitle: '保存至搜索历史',
                                removeRecentSearchButtonTitle: '从搜索历史中移除',
                                favoriteSearchesTitle: '收藏',
                                removeFavoriteSearchButtonTitle: '从收藏中移除',
                            },
                            errorScreen: {
                                titleText: '无法获取结果',
                                helpText: '你可能需要检查你的网络连接',
                            },
                            footer: {
                                selectText: '选择',
                                navigateText: '切换',
                                closeText: '关闭',
                                searchByText: '搜索提供者',
                            },
                            noResultsScreen: {
                                noResultsText: '无法找到相关结果',
                                suggestedQueryText: '你可以尝试查询',
                                reportMissingResultsText: '你认为该查询应该有结果？',
                                reportMissingResultsLinkText: '点击反馈',
                            },
                        },
                    },
                },
            },
        }),
        googleAnalyticsPlugin({
            // we have multiple deployments, which would use different id
            id: 'G-1BQBXDGY3R',
        }),
        pwaPlugin({
            maximumFileSizeToCacheInBytes: 524288, // 限制到0.5MB
            skipWaiting: true
        }),
        pwaPopupPlugin({
            locales: {
                '/': {
                    message: '发现新内容可用',
                    buttonText: '刷新',
                },
            },
        }),
        sitemapPlugin({
            hostname: "https://sustech.online/",
        }),
        mediumZoomPlugin(),
        nprogressPlugin(),
        backToTopPlugin(),
        gitPlugin(),
        tocPlugin(),
    ],
    theme: defaultTheme({
        navbar: [
            { text: '主页', link: '/' },
            { text: '快讯网', link: 'https://daily.sustech.online/' },
            { text: '小程序', link: '/miniapp/' },
            { text: '关于', link: '/about/' },
            { text: '站点帮助', link: '/site-help/' },
        ],
        repo: 'sustech-cra/sustech-online-ng',
        repoLabel: '在Github上查看',
        docsRepo: 'sustech-cra/sustech-online-ng',
        docsDir: 'docs',
        editLinkText: '一起完善这本手册！',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        editLinks: true,
        docsBranch: 'master',
        sidebarDepth: 2,
        sidebar: [
            '/',
            '/facility/',
            '/contact/',
            '/calendar/',
            '/service/',
            '/life/',
            '/study/',
            '/organizations/',
            '/media/',
            {
                text: '🚄交通',
                link: '/transport/',
                children: [
                    // SidebarItem
                    {
                        text: '🚌新版巴士时刻表',
                        link: '/transport/bustimer.md',
                        children: [],
                    },
                    {
                        text: '🚌校园巴士-工作日',
                        link: '/transport/workday.md',
                        children: [],
                    },
                    {
                        text: '🚌校园巴士-节假日',
                        link: '/transport/holiday.md',
                        children: [],
                    },
                    {
                        text: '周围交通',
                        link: '/transport/',
                        children: [],
                    },
                ],
            },
            '/surroundings/',
        ]
    }),
}
