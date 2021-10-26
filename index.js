const express = require('express');
const cors = require('cors');
const { json } = require('express');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.port || 5000;

app.get('/',(req,res) => {
  res.send('Hello From Node.yay!With nodemon! Wow!');
})

const users = [
  {id:0,name:'niloy',email:'niloy@gmail.com'},
  {id:1,name:'Erfat Farhana niloy',email:'Erfat@gmail.com'},
  {id:2,name:'Farhana',email:'Farhana@gmail.com'},
  {id:3,name:'Fultushi',email:'Fultushi@gmail.com'},
  {id:4,name:'bou',email:'bou@gmail.com'},
  {id:5,name:'Bandhubi',email:'Bandhubi@gmail.com'}
]

app.get('/users',(req,res) => {
  const search = req.query.search;
  if (search){
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
  res.send(users);
  }
})

app.post('/users',(req,res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // res.send(JSON.stringify(newUser));
  res.json(newUser);
})

app.get('/fruits/mango/harivanga',(req,res)=>{
  res.send('i like it');
})

app.get('/user/:id',(req,res) => {
  const id = req.params.id;
  const user = users[id]
   res.send(user);
})

app.listen(port,() => {
  console.log('Listtening to port: ',port);
});
