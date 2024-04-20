import {  Button, Form, ListGroup } from "react-bootstrap";

import classes from "./ListTask.module.css";

const ListTask = (props) =>{
    const  {task} = props;
    const deleteHandler =()=>{
      props.ondeleteTask(task.id)
    }
    const toggleTaskCompleted = (task) => {
        props.onAddComplete({...task,completed : true})
      };
    return(
        <ListGroup.Item variant="secondary" key={task.id} className={classes.listgroup} >
            <Form.Check
            type="checkbox" 
              id={task.id}
              label={task.name}
              onChange={() => toggleTaskCompleted(task)}
            />
            <Button variant="danger" onClick={deleteHandler}>Delete</Button>
          </ListGroup.Item>
    )
}

export default ListTask;