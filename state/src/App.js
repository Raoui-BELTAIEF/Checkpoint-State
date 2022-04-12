import React from "react";
import AddList from "./component/AddList";
import Tasklist from "./component/TaskList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tasks: [
      { id: Math.random(), text: "task1" },
      { id: Math.random(), text: "task2" },
      { id: Math.random(), text: "task3" },
    ],  }
  }
  render() { 
    
    const  AddNewTask = (text)=> {
     return this.setState({tasks:[...this.state.tasks,{text:text}]}) 
        }
        console.log(this.state.tasks)
            return ( 
      <div>
        
        <AddList AddNewTask={AddNewTask}></AddList>
        <Tasklist tasks={this.state.tasks} ></Tasklist>

  
      </div>
     );
  }
}

export default App;