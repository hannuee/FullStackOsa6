import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const anecdotes = useSelector(state => 
    (state.filter === '') 
    ? state.anecdotes 
    : state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().search(state.filter.toLowerCase()) !== -1)
  )
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote))
    dispatch(changeNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {dispatch(clearNotification())}, 5000)
  }
  
    return (
      <>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
        )}
      </>
    )
  }
  
  export default AnecdoteList