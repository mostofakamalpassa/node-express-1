/*
-------------------------------
    Basic Node Server install
------------------------------
    1. create a folder (menually or mkdir)
    2. open  command line to that folder 
    3. npm init  ( node package manager initialize)  we can all command  npm init -y
    4. npm install express (install express node js framework)
    5. Create index.js files
    -----------------------------
     For express / node server 
    -----------------------------
    1. const express = require('express'); we can use ex-6 (import)
    2. const app = express();   create a variable app  

    3.  const port = process.env.PORT  || 5000;    create port 
    4. app.get('/',(req, res)=>{
            res.send("hello kamal you can code in node js")
    });     create a api  


    5. app.listen(port, ()=>{
    console.log('Server is running')
}); create a  listen port 

6. node index.js (  nodemon index.js)
7. check on browser for that port

-----------------------
    fetch for get Method  different Serve data to client site 
    middleware  app.use(cors()), app.use(express.json())
    
-----------------------------------
1. cors   (const cors = require('cors)) setup
2. app.use(cors());
------------------------------------
    Post Data 
-------------------------------------
1. fetch method add extra Object 
    ***  { 
        method: 'post',
        headers: {content-type:'application/json'},

        body: JSON.stringify(data);
     }
*/
