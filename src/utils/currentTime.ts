export function currentTime() {
  const date = new Date()
  const curYear = date.getFullYear()
  const curMonth = date.getMonth() + 1
  const curDay = date.getDate()
  const curHour = date.getHours()
  const curMin = date.getMinutes()
  const curSec = date.getSeconds()
  return {
    curYear,
    curMonth,
    curDay,
    curHour,
    curMin,
    curSec
  }
}