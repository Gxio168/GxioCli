import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'

const guide = () => {
  const driver: Driver = new Driver({
    allowClose: false,
    doneBtnText: '结束',
    closeBtnText: '关闭',
    nextBtnText: '下一步',
    prevBtnText: '上一步'
  })
  driver.defineSteps(steps)
  driver.start()
}

const steps = [
  {
    element: '.hamburger-container',
    popover: {
      title: 'Collapse Icon',
      description: 'Open && Close sidebar',
      position: 'right'
    }
  },
  {
    element: '.app-breadcrumb',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'right'
    }
  },
  {
    element: '.layout-switch',
    popover: {
      title: 'Switch Assembly Size',
      description: 'Switch the system size',
      position: 'left'
    }
  },
  {
    element: '.translate',
    popover: {
      title: 'Switch Language',
      description: 'Switch the system language',
      position: 'left'
    }
  },
  {
    element: '.search-path',
    popover: {
      title: 'Page Search',
      description: 'Page search, quick navigation',
      position: 'left'
    }
  },
  {
    element: '.skin-swtich',
    popover: {
      title: 'Setting theme',
      description: 'Customize settings theme',
      position: 'left'
    }
  },
  {
    element: '.bell-message',
    popover: {
      title: 'Message Notification',
      description: 'Can receive company information',
      position: 'left'
    }
  },
  {
    element: '.full-screen',
    popover: {
      title: 'Full Screen',
      description: 'Full Screen, Exit The Full Screen Page',
      position: 'left'
    }
  }
]

export default guide
