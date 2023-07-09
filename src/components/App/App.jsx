// import React from 'react'

import logo from './Logo.svg'
import classes from './app.module.scss'
import '../../assets/styles/index.scss'

function App() {
  return (
    <div className={classes.container}>
      <img className={classes.logo} src={logo} alt="logo" />
      <main className={classes.main}>
        {/* <Filter /> */}
        <div className={classes.content}>
          {/* <Tabs />
          <TicketsList /> */}
        </div>
      </main>
    </div>
  )
}

export default App
