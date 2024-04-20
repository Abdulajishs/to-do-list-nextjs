import { MongoClient } from "mongodb";

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
    
}

export default handler; 