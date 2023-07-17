import { flightDuration, flightTime, stopsName } from '../../utils/utils'

import classes from './ticket.module.scss'

function Ticket({ data }) {
  const ticketSegments = data.segments.map((seg, idx) => (
    <div key={idx} className={classes['tickets-list-item__segment']}>
      <div className={classes['tickets-list-item__col']}>
        <div className={classes['tickets-list-item__title']}>
          {seg.destination} - {seg.origin}
        </div>
        <div className={classes['tickets-list-item__text']}>{flightTime(seg.date, seg.duration)}</div>
      </div>
      <div className={classes['tickets-list-item__col']}>
        <div className={classes['tickets-list-item__title']}>В пути</div>
        <div className={classes['tickets-list-item__text']}>{flightDuration(seg.duration)}</div>
      </div>
      <div className={classes['tickets-list-item__col']}>
        <div className={classes['tickets-list-item__title']}>
          {seg.stops.length ? seg.stops.length + stopsName(seg.stops.length) : 'без пересадок'}
        </div>
        <div className={classes['tickets-list-item__text']}>{seg.stops.join(', ')}</div>
      </div>
    </div>
  ))

  const aviaLogo = `https://pics.avs.io/220/76/${data.carrier}.png`

  return (
    <div key={data.id} className={classes['tickets-list-item']}>
      <div className={classes['tickets-list-item__header']}>
        <span className={classes['tickets-list-item__price']}>{data.price} Р</span>
        <img src={aviaLogo} className={classes['tickets-list-item__avialogo']} alt="Лого авиакомпании" />
      </div>
      <div className={classes['tickets-list-item__description']}>{ticketSegments}</div>
    </div>
  )
}

export default Ticket
