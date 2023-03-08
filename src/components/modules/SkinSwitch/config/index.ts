export default [
  {
    title: '全局主题',
    icon: 'Operation',
    themeItem: [
      {
        name: 'themeColor',
        label: '主题颜色',
        handle: 'changeThemeColor',
        default: 'color-picker'
      },
      {
        name: 'isDark',
        label: '暗黑模式',
        handle: 'changeIsDark'
      },
      {
        name: 'isGrey',
        label: '灰色模式',
        handle: 'changeIsGrey'
      },
      {
        name: 'isAchromatism',
        label: '色弱模式',
        handle: 'changeIsAchromatism'
      }
    ]
  },
  {
    title: '界面设置',
    icon: 'setting',
    themeItem: [
      {
        name: 'sidebarOpen',
        label: '折叠菜单',
        handle: 'toggleSidebar'
      },
      {
        name: 'hamburgerOpen',
        label: '面包屑',
        handle: 'toggleSidebar'
      },
      {
        name: 'hamburgerIconOpen',
        label: '面包屑图标',
        handle: 'toggleSidebar'
      },
      {
        name: 'labelBarOpen',
        label: '标签栏',
        handle: 'toggleSidebar'
      },
      {
        name: 'labelBarIconOpen',
        label: '标签栏图标',
        handle: 'toggleSidebar'
      },
      {
        name: 'footerOpen',
        label: '页脚',
        handle: 'toggleFooter'
      }
    ]
  }
]
