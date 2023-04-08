const express= require('express');
const bodyParser=require('body-parser');
const cors= require('cors');
const fs =require('fs');
const PORT =3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/',function(req,res){
    res.send("hello from node server")
})

app.listen(PORT,function(){
    console.log("Server running on port "+PORT);
});
const users = require('../SharedClassesAndTypes/users.js');
// var user = require('../SharedClassesAndTypes/userModel')
// var userModel = new user.userModel();
var User = new users;

var obj ={users:[User]};

app.post('/enroll',function(req,res){
    console.log(req.body);
    User.username=req.body.username;
    User.email=req.body.email;
    User.password=req.body.password;
    User.media=req.body.media;
    // console.log(userModel);
    obj.users.push(User);
    console.log(obj.users);
    fs.writeFileSync('./db.json',JSON.stringify(obj, null), function(err) {
      if(err) {
      return console.log(err);
      }
      console.log("The file was saved!");
      });

    //calling mongo db
    res.status(200).send({"data":"Recived successfully"});
});
var objects
app.use('/db',function(req,res,next){
  if(req.body.email == obj.users[0].email && req.body.password == obj.users[0].password){
      next()
  }else{
      res.send('Invalid data')
  }
})
app.get('/db',function(req,res){
  fs.readFile('./db.json', 'utf8', function(err, data){
    if(err) throw err;
    console.log(data)
    objects=data;
    res.status(200).send(objects);
     return true;
  })
  // res.end();
});
