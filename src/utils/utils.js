import { format, add } from 'date-fns'

// фильтр по пересадкам
export const filterTickets = (arr, filterId) => {
  let newArr = []
  if (filterId.includes('0')) {
    const filtered = arr.filter((el) => el.segments[0].stops.length === 0 || el.segments[1].stops.length === 0)
    newArr = [...newArr, ...filtered]
  } else if (filterId.includes('1')) {
    const filtered = arr.filter((el) => el.segments[0].stops.length === 1 || el.segments[1].stops.length === 1)
    newArr = [...newArr, ...filtered]
  } else if (filterId.includes('2')) {
    const filtered = arr.filter((el) => el.segments[0].stops.length === 2 || el.segments[1].stops.length === 2)
    newArr = [...newArr, ...filtered]
  } else if (filterId.includes('3')) {
    const filtered = arr.filter((el) => el.segments[0].stops.length === 3 || el.segments[1].stops.length === 3)
    newArr = [...newArr, ...filtered]
  }
  return newArr
}

// фильтр по стоимости
export const sortTickets = (arr, tabId) => {
  switch (tabId) {
    case 'cheap':
      return [...arr].sort((prev, next) => prev.price - next.price)
    case 'fast':
      return [...arr].sort((prev, next) => {
        const prevTime = prev.segments[0].duration + prev.segments[1].duration
        const nextTime = next.segments[0].duration + next.segments[1].duration
        return prevTime - nextTime
      })
    default:
      return arr
  }
}

// данные для билета
export const flightTime = (time, duration) => {
  const departure = format(new Date(time), 'HH:mm')
  const arrival = format(add(new Date(time), { minutes: duration }), 'HH:mm')
  return `${departure} - ${arrival}`
}

export const flightDuration = (duration) => {
  const hours = Math.trunc(duration / 60)
  let minutes = duration - hours * 60
  minutes = minutes < 10 ? `0${minutes}` : minutes
  return `${hours}ч ${minutes}м`
}

export const stopsName = (num) => (num === 1 ? ' пересадка' : ' пересадки')
