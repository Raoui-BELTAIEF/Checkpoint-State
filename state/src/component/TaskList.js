import React from 'react'

function TaskList({tasks}) {
  console.log(tasks)
  return (
    <div>
 {tasks.map(el=><h1>{el.text} </h1>)}
    </div>
  )
}

export default TaskList