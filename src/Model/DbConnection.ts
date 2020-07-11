import dotenv from 'dotenv'
dotenv.config()
import MongoClient from 'mongodb'

export default async ()=>{
    try{
        const uri = `YOUR MONGODB URL CONNECTION`
        const client = await MongoClient.connect(uri, {useUnifiedTopology: true})
        return client
    }catch(error) {console.log(error)}
}
