// import React from 'react'
import { connect } from 'react-redux'
import { Spin } from 'antd'

import Filter from '../Filter/Filter'
import Tabs from '../Tabs/Tabs'
import TicketList from '../TicketList/TicketList'
import logo from '../../assets/img/Logo.svg'

import classes from './app.module.scss'
import '../../assets/styles/index.scss'

function App({ stop }) {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="logo" />
      <main className={classes.main}>
        <Filter />
        <div className={classes.content}>
          <Tabs />
          {!stop ? <Spin /> : null}
          <TicketList />
        </div>
      </main>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stop: state.tickets.stop,
  tickets: state.tickets.tickets,
})

export default connect(mapStateToProps)(App)
