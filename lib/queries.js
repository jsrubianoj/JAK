'use strict'

const connectDb = require('./db')
const { ObjectId } = require('mongodb')

module.exports = {
    getUsers: async()=>{
        let db
        let users=[]
        try{
            db = await connectDb()
            users = await db.collection('users').find().toArray()
        }catch(err){
            console.error(err)
        }
        return users
    },
    
    getProjects: async()=>{
        let db
        let projects=[]
        try{
            db = await connectDb()
            projects = await db.collection('projects').find().toArray()
        }catch(err){
            console.error(err)
        }
        return projects
    },
    getProject: async(root,{_id})=>{
        let db
        let project
        try{
            db = await connectDb()
            project = await db.collection('projects').findOne({_id: ObjectId(id)})
        }catch(err){
            console.error(err)
        }
        return project
    },
    getStudents: async(root,{_id})=>{
        let db
        let students=[]
        try{
            db = await connectDb()
            is
            students = await db.collection('users').find().toArray()// CHECK THIS
        }catch(err){
            console.error(err)
        }
        return students
    },
    getRequests: async(root,{_id})=>{
        let db
        let requests=[]
        try{
            db = await connectDb()
            requests = await db.collection('requests').find().toArray()
        }catch(err){
            console.error(err)
        }
        return requests
    }
}