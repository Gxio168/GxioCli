export function throttle(fn: Function, delay: number = 50) {
  let timer: null | NodeJS.Timeout = null
  return () => {
    return new Promise(resolve => {
      if (!timer) {
        timer = setTimeout(() => {
          resolve(fn())
          timer = null
        }, delay)
      }
    })
  }
}
