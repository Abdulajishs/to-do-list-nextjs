import { MongoClient } from "mongodb";
import CompletedTask from "../../../components/task/CompletedTask"

export default function Completed(props) {
  return (
    <>
      <CompletedTask tasks={props.tasks}/>
      {/* <h2>Completed</h2> */}
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
        completed : task.completed,
      })),
    },
    revalidate: 1,
  };
}