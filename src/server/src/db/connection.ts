import { config } from "../config/config.js"
import { MongoClient, ServerApiVersion } from "mongodb";

// Connection module. Sets up the connection to the MongoDB database specified in the config.
const uri = config.mongoURI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch(err) {
    console.error(err);
}

let db = client.db("MunchMunch");
export default db;