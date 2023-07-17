import { useSelector } from 'react-redux'
import { Spin } from 'antd'

import Filter from '../Filter/Filter'
import Tabs from '../Tabs/Tabs'
import TicketList from '../TicketList/TicketList'
import logo from '../../assets/img/Logo.svg'

import classes from './app.module.scss'
import '../../assets/styles/index.scss'

function App() {
  const stop = useSelector((state) => state.tickets.stop)

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

export default App
