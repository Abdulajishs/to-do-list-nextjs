
// import TaskContext from "@/store/task-context";
import { useContext } from "react";
import { ListGroup } from "react-bootstrap";

const CompletedTask = (props) => {
  // const taskCntx = useContext(TaskContext);
  return (
    <ListGroup>
      {props.tasks.map((task) => (
        <ListGroup.Item
        variant="primary"
        as="li"
        className="d-flex justify-content-between align-items-start"
        key={task.id}
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{task.name}</div>
          {task.description}
        </div>
      </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CompletedTask;
