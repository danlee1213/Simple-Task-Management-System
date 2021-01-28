const express = require('express');
const app = express();
const fs = require('fs');
const qs = require('querystring');
const tasksRouter = require('./routes/tasks');
const indexRouter = require('./routes/index');
const methodOverride = require('method-override'); //Since HTML only supports GET/POST for PATCH/DELETE/PUT using method-override
const compression = require('compression'); //For compressing large data
const bodyParser = require('body-parser');
const io = require('socket.io'); //Socket.io for socket communication
const helmet = require('helmet');
app.use(helmet()); //For security best practices


//Find static files in 'public' folder
app.use(express.static('public'));
//Using body-parser (Middleware)
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression()); //Compress large input data
app.use(methodOverride('_method')); // to use PUT, DELETE methods
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//Middleware to access tasks
app.get('*',function(request, response, next){
  const rawData = fs.readFileSync('./data/tasks.json');
  const jsonData = JSON.parse(rawData);
  const taskLists = [];
  for(key in jsonData) {
    const taskList = {
      id: jsonData[key].id,
      title: jsonData[key].title,
      description: jsonData[key].description,
      expireDate: jsonData[key].expireDate,
    }
    taskLists.push(taskList);
  }

  request.list = taskLists;
  next();
});

//Middleware of Homepage
app.use('/', indexRouter);
//Adapt middleware for addresses which have '/tasks' (Lists page)
app.use('/tasks',tasksRouter);

//Error notification (404 not found)
app.use(function(request, response, next){
  response.status(404).send('404 Error, Sorry cannot find that');
});

//Default error handling
app.use(function(err, req, res, next){
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, function(){
  console.log('App listening to 3000 port');
});

