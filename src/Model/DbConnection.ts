import dotenv from 'dotenv'
dotenv.config()
import MongoClient from 'mongodb'

export default async ()=>{
    try{
        const uri = `mongodb+srv://NotifyClients:${process.env.APP_MONGODB_PASSWORD}.a9kz1.mongodb.net/Notifications?retryWrites=true&w=majority`
        const client = await MongoClient.connect(uri, {useUnifiedTopology: true})
        return client
    }catch(error) {console.log(error)}
}
