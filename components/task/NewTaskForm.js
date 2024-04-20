import { useRef, useState } from "react";
import { Button, Card, Collapse, Container, ListGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListTask from "./ListTask";
import classes from "./NewTaskForm.module.css";

export default function NewTaskForm(props) {
  const incompleteTasks = props.tasks.filter(task => !task.completed);
  // console.log(incompleteTasks);

  const [open, setOpen] = useState(false);
  const nameRef = useRef("");
  const descriptionRef = useRef("");

  const addTaskHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const newTask = { name, description, completed: false };

    props.onAddTask(newTask)

    setOpen(false);

    nameRef.current.value = "";
    descriptionRef.current.value = "";
  };

  const cancelHandler = () => {
    setOpen(false);
  };
  
  return (
    <Container className={classes.card}>
      <h1>Today</h1>
      <ListGroup>
        {incompleteTasks.map((task) => (
          <ListTask
            key={task.id}
            task={task}
            onAddComplete={props.onAddComplete}
            ondeleteTask={props.ondeleteTask}
          />
        ))}
      </ListGroup>
      <Card.Body>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Add task
        </Button>
        <Collapse in={open}>
          <Form onSubmit={addTaskHandler}>
            <Form.Control type="text" placeholder="Task name" ref={nameRef} required/>
            <Form.Control
              type="text"
              placeholder="Description"
              ref={descriptionRef}
            />
            <div>
              <Button variant="light" onClick={cancelHandler}>
                Cancel
              </Button>
              <Button variant="warning" type="submit">
                Add task
              </Button>
            </div>
          </Form>
        </Collapse>
      </Card.Body>
    </Container>
  );
}
