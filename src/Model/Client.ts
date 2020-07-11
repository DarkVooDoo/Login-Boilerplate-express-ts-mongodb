import database from './DbConnection'
import { SignInTypes } from '../Types/Types'

export const SignIn = async ({email, password}:SignInTypes)=>{
    const client = await database()
    if(typeof client !== 'undefined'){
        try{
            const docs = await client.db('Notifications').collection('Clients').findOne({password, email})
            client.close()
            if(docs !== null) {
                return {
                    id: docs._id,
                    name: docs.name,
                    email: docs.email
                }
            }
            else return 'Couldnt find any user'
        }catch(error) {console.log(error)}
    }
}

type SignUpTypes = {
    name: string, 
    email: string,
    password: string
}
export const SignUp = async ({name,email,password}:SignUpTypes)=>{
    const client = await database()
    if(typeof client !== 'undefined'){
        try{
            const {insertedCount} = await client.db('Notifications').collection('Clients').insertOne({name,email,password})
            client.close()
            if(insertedCount > 0) return 'Inserted'
            else return 'Failed'
        }catch(error) {console.log(error)}
    }

}

export const UpdateClient = async ({name, email, password}: SignUpTypes)=>{
    const client = await database()
    if(typeof client !== 'undefined'){
        try{
            const {modifiedCount} = await client.db('Notifications').collection('Clients').updateOne({"email": email}, {$set: {name, password}})
            client.close()
            if(modifiedCount > 0) return 'Client Modified'
            else return 'Failed'
        }catch(error) {console.log(error)}
    }
}