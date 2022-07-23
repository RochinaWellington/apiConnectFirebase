const express = require('express')
const morgan= require('morgan')
const {db} =require('./firebase')
const app=express();

app.use(morgan('dev'))
app.use(express.json())

app.get('/',async(req,res)=>{
    const querySnapshot=await db.collection('contacts').get()
    const contacts=querySnapshot.docs.map(doc=>({
        id:doc.id,
        firstname:doc.data().firstname,
        lastname:doc.data().lastname

    }))
    res.send(contacts)
})

module.exports=app;