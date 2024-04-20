import { MongoClient } from "mongodb";
import NewTaskForm from "../../components/task/NewTaskForm";

export default function Today(props) {
  const addTaskHandler = async (taskdata) => {
    const response = await fetch("api/new-task", {
      method: "POST",
      body: JSON.stringify(taskdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };

  const addCompleteHandler = async (completedata) => {
    const response = await fetch("api/complete-task", {
      method: "POST",
      body: JSON.stringify(completedata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  };
  // console.log(props.tasks);
  return (
    <>
      <NewTaskForm onAddTask={addTaskHandler} onAddComplete={addCompleteHandler} tasks={props.tasks}/>
    </>
  );
}


export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const tasksCollection = db.collection("tasks");
  const tasks = await tasksCollection.find().toArray();

  client.close();

  return {
    props: {
      tasks: tasks.map((task) => ({
        name: task.name,
        description: task.description,
        id: task._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

