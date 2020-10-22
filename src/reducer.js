const redux = require('redux')

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
        const oldGood = state.good
        return Object.assign({}, state, {
            good: oldGood + 1
        })
    case 'OK':
        const oldOk = state.ok
        return Object.assign({}, state,     {
            ok: oldOk + 1
        })
    case 'BAD':
        const oldBad = state.bad
        return Object.assign({}, state, {
            bad: oldBad + 1
        })
    case 'ZERO':
        return state=initialState
    default: 
        return state
  }
  
}

export default counterReducer