import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
    const handleIncrement = (dispatchType) => {
        store.dispatch({
            type: `${dispatchType}`
        })
    }

  return (
    <div>
        <button onClick={e => handleIncrement('GOOD')}>good</button> 
        <button onClick={e => handleIncrement('OK')}>neutral</button> 
        <button onClick={e => handleIncrement('BAD')}>bad</button>
        <button onClick={e =>handleIncrement('ZERO')}>reset stats</button>
        <div>good {store.getState().good}</div>
        <div>neutral {store.getState().ok}</div>
        <div>bad {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
