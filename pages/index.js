import Head from 'next/head'
import styles from '../styles/main.module.css'
import { useState } from 'react'

export default function Home() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)

    console.log(input);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setTodoList([
      input,
      ...todoList
    ])

    console.log(todoList)
    setInput('')
  }

  const handleDelete = (todo) => {
    const UpdatedArr = todoList.filter((item) => todoList.indexOf(item) != todoList.indexOf(todo))
    setTodoList(UpdatedArr)
  }




  return (
    <div className={styles.container}>
      <Head>
        <title>Next JS - Task Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          TODO LIST
        </h1>

        <form>
          <div className={styles.input}>
            <input 
              type="text"
              value={input}
              onChange={handleChange}
              placeholder ='New Todo List'
            />
          </div>

          <div className={styles.select}>
            <select>
              <option selected="true" disabled="disabled">Status (Pending / In Progress / Done)</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
          </div>

          <div className={styles.buttons}>
            <button onClick={handleSubmit}>ADD</button>
            <button>MODIFY</button>
          </div>
        </form>

        <div className={styles.list}>
        <ul>
          {
            todoList.length >= 1 ? todoList.map((todo, index) => {
              return <li key={index}>{todo}<button onClick={(e) => {
                e.preventDefault()
                handleDelete(todo)
              }}>X</button></li>
            })
              : <p style={{color: '#333'}}>Add a Todo Item</p>

          }
        </ul>
        </div>

      </main>
    </div>
  )
}
