import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect("mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();

        const tasksCollection = db.collection("tasks");

        const result = await tasksCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({message : "task inserted!"});
    }
    if (req.method === "PUT") {
        const data = req.body;

        const taskId = data.id;

        delete data.id

        const client = await MongoClient.connect("mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();

        const tasksCollection = db.collection("tasks");

        const result = await tasksCollection.updateOne(
            {_id :new ObjectId(taskId)},
            { $set : data}
        );

        console.log(result);

        client.close();

        res.status(201).json({message : "task completed!"});
    }
    if (req.method === "DELETE") {

        const {id}  = req.query;
        const client = await MongoClient.connect("mongodb+srv://abdul:AEhDN85438zD7XGG@cluster0.cr8xth8.mongodb.net/to-do-list?retryWrites=true&w=majority&appName=Cluster0")
        const db = client.db();

        const tasksCollection = db.collection("tasks");

        const result = await tasksCollection.deleteOne(
            {_id :new ObjectId(id)}
        );

        console.log(result);

        client.close();

        res.status(201).json({message : "delete task completed!"});
    }
}

export default handler; 