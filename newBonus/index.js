const express=require('express')
const cors=require('cors')
const phone=require('./phone.json')
const app=express()
const port=5000;

app.use(cors())

app.get('/',(req,res)=>{
    res.send('my new server is  running now soon')
})

app.get('/phones',(req,res)=>{
    res.send(phone)
})

app.get('/phones/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    console.log('i need id for : ',id);
    const singlePhone=phone.find(phn=>phn.id===id) || {}
    res.send(singlePhone)
})

app.listen(port,()=>{
    console.log(`server is running on this port :${port}`)
})