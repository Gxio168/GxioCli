import { currentTime } from '@/utils/currentTime'

enum Time {
  morning = '上午',
  afternoon = '下午',
  evening = '晚上'
}

export function useCurrentTime() {
  const { curHour } = currentTime()
  let time: string = ''
  if (curHour < 12) {
    time = Time.morning
  } else if (curHour < 18) {
    time = Time.afternoon
  } else {
    time = Time.evening
  }
  return {
    timeStr: time + '好, 🌞'
  }
}
