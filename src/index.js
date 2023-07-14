import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// import reduxThunk from 'redux-thunk'
// import { composeWithDevTools } from '@redux-devtools/extension'
// import { createStore, applyMiddleware } from 'redux'

import rootReducer from './store/reducers/rootReducer'
import App from './components/App/App'
import './assets/styles/index.scss'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
