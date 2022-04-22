const express = require('express');
const app = express();

const port = process.env.PORT  || 5000;

const  cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("hello kamal you can code in node js")
});

const users = [
    {id:1, name:'kamal',job:'aa', phone:'01720246683'},
    {id:2, name:'jaml',job:'dd', phone:'01720246683'},
    {id:3, name:'tomal',job:'ff', phone:'01720246683'},
    {id:4, name:'damal',job:'gg', phone:'01720246683'},
    {id:5, name:'chamal',job:'ee', phone:'01720246683'},
    {id:6, name:'gamal',job:'hh', phone:'01720246683'},
    {id:7, name:'tamal',job:'uu', phone:'01720246683'},
]

app.get('/users', (req, res)=>{
    res.send(users);
});

// dynamic parameters 
app.get('/user/:id',(req, res)=>{
   // console.log(req.params);
    const id = req.params.id;
    // const userId = users[id];
    const userId = users.find(u => u.id === parseInt(id));
    res.send(userId);
});

// post method

app.post('/user',(req, res)=>{
    console.log(req.body);
    const user = req.body;
     user.id = users.length + 1;
    users.push(user);

    res.send({"data":user});
})

app.listen(port, ()=>{
    console.log('Server is running')
})