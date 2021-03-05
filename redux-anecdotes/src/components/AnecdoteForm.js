import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        dispatch(createAnecdote(anecdote))

        dispatch(changeNotification(`you created new anecdote '${anecdote}'`))
        setTimeout(() => {dispatch(clearNotification())}, 5000)
    }
  
    return (
      <>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdote" /></div>
          <button type="submit">create</button>
        </form>
        <br />
      </>
    )
  }
  
  export default AnecdoteForm