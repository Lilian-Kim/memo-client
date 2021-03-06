import React from 'react'
import ReactDOM from 'react-dom'
// import './index.scss';
import App from './App'
import * as serviceWorker from './serviceWorker'
import './styles/reset.scss'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './modules'
import {tempSetUser, check} from 'modules/user'
import{HelmetProvider} from 'react-helmet-async'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

function loadUser(){
  try{
    const user = localStorage.getItem('user')
    if(!user) return
    store.dispatch(tempSetUser(user))
    store.dispatch(check())
  }catch(e){
    console.log('loalStorage is not working')
  }
}

sagaMiddleware.run(rootSaga)
loadUser()

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <HelmetProvider>
    <App />
    </HelmetProvider>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
