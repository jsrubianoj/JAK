'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
    createUser: async(root,{input})=>{
        const newUser=Object.assign(defaults,input)
        let db
        let user 
        try{
            db = await connectDb()
            user = await db.collection('users').insertOne(newUser)
            newUser._id=user.insertedId
        }catch(err){
            console.error(err)
        }
        return newUser
        
    },
    createProject: async(root,{input})=>{
        const newProject=Object.assign(defaults,input)
        let db
        let project
        try{
            db = await connectDb()
            project = await db.collection('projects').insertOne(newProject)
            newProject._id=project.insertedId
        }catch(err){
            console.error(err)
        }
        return newProject
    },
    createRequest: async(root,{input})=>{
        const newRequest=Object.assign(defaults,input)
        let db
        let request
        try{
            db = await connectDb()
            request = await db.collection('requests').insertOne(newRequest) 
            newRequest._id=request.insertedId
        }catch(err){
            console.error(err)
        }
        return newRequest
    },
    editUser: async(root,{_id,input})=>{
        let db
        let user
        try{
            db = await connectDb()
            await db.collection('users').updateOne({_id:ObjectId(_id)},{$set:input})
            user = await db.collection('users').findOne({_id:ObjectId(_id)})
        }catch(err){
            console.error(err)
        }
        return user
    },
    editProject: async(root,{_id,input})=>{
        let db
        let project
        try{
            db = await connectDb()
            await db.collection('projects').updateOne({_id:ObjectId(_id)},{$set:input})
            project = await db.collection('projects').findOne({_id:ObjectId(_id)})
        }catch(err){
            console.error(err)
        }
        return project
    },
    editRequest: async(root,{_id,input})=>{
        let db
        let request
        try{
            db = await connectDb()
            await db.collection('requests').updateOne({_id:ObjectId(_id)},{$set:input})
            request = await db.collection('requests').findOne({_id:ObjectId(_id)})
        }catch(err){
            console.error(err)
        }
        return request
    },
    editUserState: async(root,{_id,input})=>{
        let db
        let user
        try{
            db = await connectDb()
            await db.collection('users').updateOne({_id:ObjectId(_id)},{$set:input})
            user = await db.collection('users').findOne({_id:ObjectId(_id)})    
        }catch(err){
            console.error(err)
        }
        return user
    },
    editPersonalInfo: async(root,{_id,input})=>{
        let db
        let user
        try{
            db = await connectDb()
            await db.collection('users').updateOne({_id:ObjectId(_id)},{$set:input})
            user = await db.collection('users').findOne({_id:ObjectId(_id)})
        }catch(err){
            console.error(err)
        }
        return user
    }
}