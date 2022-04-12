import React from "react";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class AddList  extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text:"" } 
    }
    render() { 
        console.log(this.state.text)
        return ( 
            <div>
             <input type="text" onChange={(event)=>this.setState({text:event.target.value})} value={this.state.text}/>
             <Button onClick={()=>{this.props.AddNewTask(this.state.text) ;this.setState({text:""})}}>add</Button>
            </div>
         );
    }
}
 
export default AddList ;