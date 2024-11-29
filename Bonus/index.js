const express=require ('express')
const app=express()
const port=5000;

app.get('/',(req,res)=>{
    res.send('my first server')
})

app.get('/data',(req,res)=>{
    res.send('more data comming soooooooooon')
})

app.listen(port,()=>{
    console.log(`server is running on this ${port} port`)
})