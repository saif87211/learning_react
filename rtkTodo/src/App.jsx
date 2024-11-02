import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from "./components/AddTodo.jsx"
import Todo from "./components/Todo.jsx"
import './App.css'

function App() {

  return (
    <>
      <h1>Chai with Redux-toolkit</h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
