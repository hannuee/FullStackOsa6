  const initialState = 'Everything is ok!'
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE':
        return action.data.notification
      case 'CLEAR':
          return ''
      default: return state
    }
  }
  
  export const changeNotification = (notification, seconds) => {
    return async dispatch => {
      setTimeout(() => {dispatch(clearNotification())}, seconds*1000)
      dispatch({
        type: 'CHANGE',
        data: { notification }
      })
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'CLEAR'
    }
  }
  
  export default reducer