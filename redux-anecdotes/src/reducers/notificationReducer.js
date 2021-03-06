  const initialState = {
    text: 'Everything is ok!',
    timeoutID: null
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
        if (state.timeoutID !== null) clearTimeout(state.timeoutID)
        return action.data
      case 'CLEAR':
          return {text: '', timeoutID: null}
      default: return state
    }
  }
  
  export const changeNotification = (text, seconds) => {
    return async dispatch => {
      const timeoutID = setTimeout(() => {dispatch(clearNotification())}, seconds*1000)
      dispatch({
        type: 'CHANGE',
        data: { text, timeoutID }
      })
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'CLEAR'
    }
  }
  
  export default reducer