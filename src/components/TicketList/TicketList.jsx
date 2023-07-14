import { useEffect } from 'react'
import { Alert } from 'antd'
import { connect } from 'react-redux'

import { getData, showMoreClick } from '../../store/actions/actions'
import Ticket from '../Ticket/Ticket'

import classes from './ticketList.module.scss'

function TicketList({ tickets, tabs, getData, filters, showTickets, onShowMore }) {
  useEffect(() => {
    getData()
  }, [])

  const sortTickets = (arr, tabId) => {
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

  const filterTickets = (arr, filterId) => {
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

  const activeTab = tabs.filter((el) => el.active)[0].id
  const activeFilter = filters.filters.filter((el) => el.checked).map((el) => el.id)
  const filteredTickets = filterTickets(sortTickets(tickets, activeTab), activeFilter)

  const viewTickets = filteredTickets.length ? (
    filteredTickets.slice(0, showTickets).map((ticket, idx) => <Ticket key={idx} data={ticket} />)
  ) : (
    <Alert description="Рейсов, подходящих под заданные фильтры, не найдено" type="warning" showIcon />
  )

  return (
    <div className={classes['tickets-list']}>
      {viewTickets}
      <button onClick={onShowMore} className={classes['tickets-list__button']} type="button">
        Показать еще 5 билетов...
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.tickets,
  showTickets: state.tickets.showTickets,
  tabs: state.tabs.tabs,
  filters: state.filters,
})

const mapDispatchToProps = (dispatch) => ({
  getData: () => dispatch(getData()),
  onShowMore: () => dispatch(showMoreClick()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
