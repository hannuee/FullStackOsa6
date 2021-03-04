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
  
  export const changeNotification = (notification) => {
    return {
      type: 'CHANGE',
      data: { notification }
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'CLEAR'
    }
  }
  
  export default reducer