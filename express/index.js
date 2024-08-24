import express from "express"
const app =express()
const port = 3000

app.use(express.json())

let teaData = []
let nextId =1

// CREATE DATAS
app.post('/teas', (req, res)=>{
    const {name, price} =req.body
    const newTea = {id:  nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})

// READ DATA
app.get("/teas", (req, res)=>{
    res.status(200).send(teaData)
})
// READ SINGLE DATA
app.get('/teas/:id', (req, res)=>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send("Tea Not found")
    }
    res.status(200).send("tea")
})

// UPDATE DATAS
app.put('/teas/:id', (req, res)=>{
  const tea = teaData.find(t => t.id === parseInt(req.params.id))
  if (!tea){
    return res.status(404). send("not found")
  }
  const {name, price} = req.body
  tea.name = name
  tea.price =price
  res.send(200).send(tea)
})
// DELETE DATAS
app.delete('/teas/:id', (req, res)=>{
    const index = teaData.findIndex(t => t.id ===parseInt.req.params.id)
    if(index === -1){
        return res.status(404).send("tea not found")
    }
})






app.listen(port, ()=>{
    console.log(`server running on port: ${port}...`);
    
})
