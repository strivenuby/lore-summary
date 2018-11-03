module.exports = {
  port: 8988,
  title: '知识总结',
  base: '/lore-summary/',
  description: '',
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 假定 GitHub。也可以是一个完整的 GitLab URL
    // repo: 'strivenuby/app-vue',
    editLinks: true,
    docsDir: 'docs',
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '欢迎阅读，如有问题可改正',
    lastUpdated: '上次更新',
    nav: [{ text: '首页', link: '/' }],
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: ['guide/']
      },
      {
        title: 'JavaScript',
        collapsable: false,
        children: ['JS/ES6', 'JS/异步', 'JS/原型', 'JS/vdom']
      },
      {
        title: '算法',
        collapsable: false,
        children: ['algorithm/二叉树']
      },
      {
        title: 'Python',
        collapsable: false,
        children: ['Python/', 'Python/data-type/Number', 'Python/problem']
      },
      {
        title: 'Linux',
        collapsable: false,
        children: [
          'Linux/base',
          'Linux/服务器使用/apache使用',
          'Linux/服务器使用/cron同步使用',
          'Linux/服务器使用/linux常见命令',
          'Linux/服务器使用/linux进程后台运行的几种方法',
          'Linux/服务器使用/ubnutu安装',
          'Linux/服务器使用/网卡默认路由'
        ]
      }
    ]
  }
}
