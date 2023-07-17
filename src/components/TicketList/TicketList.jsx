import { useEffect } from 'react'
import { Alert } from 'antd'
import { connect } from 'react-redux'

import { getData, showMoreClick } from '../../store/actions/actions'
import Ticket from '../Ticket/Ticket'
import { filterTickets, sortTickets } from '../../utils/utils'

import classes from './ticketList.module.scss'

function TicketList({ tickets, tabs, getData, filters, showTickets, onShowMore }) {
  useEffect(() => {
    getData()
  }, [])

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
