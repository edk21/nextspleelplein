const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI
import mongoose from "mongoose"

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGODB_URI)

        if (connection.readyState === 1) {
            console.log("Database Connected")
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo
// import { MongoClient } from "mongodb";
// const Db = process.env.NEXT_PUBLIC_MONGODB_URI
// const client = new MongoClient(Db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// let _db;

// export async function connectToServer(callback) {

//     try {
//         await client.connect();
//     } catch (e) {
//         console.error(e);
//     }

//     _db = client.db("ChildrenDatabase");

//     return (_db === undefined ? false : true);
// }
// export function getDB() {
//     return _db;
// }