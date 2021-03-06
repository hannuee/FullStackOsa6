import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''

        props.createAnecdote(anecdote)

        props.changeNotification(`you created new anecdote '${anecdote}'`, 5)
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
  
  const mapDispatchToProps = {
    createAnecdote,
    changeNotification
  }
  
  export default connect(null, mapDispatchToProps)(AnecdoteForm)