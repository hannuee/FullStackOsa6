const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const anecdoteToChange = state.find(anecdote => anecdote.id === action.data.id)
      const changedAnecdote = { 
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote 
      )
    case 'NEW_ANECDOTE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default: return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: getId(),
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default reducer
