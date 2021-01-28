const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
// const sanitizeHtml = require('sanitize-html'); 
const template = require('../lib/template.js');

// Create page
router.get('/create_page', function(request, response){
    const title = 'Welcome to the system';
    const list = template.list(request.list);
    const html = template.HTML(title, list, `
      <form action="/tasks" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p>
        <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
        Select the deadline
        <input type="datetime-local" id="expireDate"
        name="expireDate">
        </p>
        <p>
        <input type="submit">
        </p>
      </form>
    `, '');
    response.send(html); 
  });
  
  // Create task
  router.post('/', function(request, response){
    const { title, description, expireDate } = request.body;

    const tasks = JSON.parse(fs.readFileSync('./data/tasks.json'));
    const nextTaskId = Number(tasks[tasks.length - 1].id) + 1;

    tasks.push({
      id: nextTaskId,
      title,
      description,
      expireDate: expireDate ? expireDate : '',
    });

    fs.writeFileSync('./data/tasks.json', JSON.stringify(tasks));

    response.redirect(`/tasks/${nextTaskId}`);
  });
  
  // CRUD Page
  router.get('/:id', function(request, response){
    const id = request.params.id;
    const taskLists = request.list;
    const task = taskLists.find(taskList => taskList.id === Number(id));
    const list = template.list(taskLists);
    const html = template.HTML(task.title, list,
      `
      <form action="/tasks/${id}?_method=put" method="post"> 
        <input type="hidden" name="id" value="${task.id}">
        <p><input type="text" name="title" placeholder="title" value="${task.title}"></p>
        <p>
          <textarea name="description" placeholder="description">${task.description}</textarea>
        </p>
        <p>
          Select the deadline
          <input type="datetime-local" id="expireDate"
          name="expireDate" value=${task.expireDate ? task.expireDate
          : ''}>
        </p>
        <p>
          <input type="submit" value="Update">
        </p>
      </form>
      <form action="/tasks/${id}?_method=delete" method="post">
        <input type="hidden" name="id" value="${task.id}">
        <input type="submit" value="Delete">
      </form>
      `,
      `<a href="/tasks/create_page">create</a>`
    );
    response.send(html);
  });

  // Process Update
  router.put('/:id', function(request, response){
    const { id, title, description, expireDate } = request.body; //request can now access to body property (body-parser)
    console.log(`request.body: ${JSON.stringify(request.body)}`); //This is for debugging
    var tasks = JSON.parse(fs.readFileSync('./data/tasks.json'));
    tasks.forEach(task => {
      if(task.id === Number(id)) {
        task.title = title;
        task.description = description;
        task.expireDate = expireDate;
      }
    })

    fs.writeFileSync('./data/tasks.json', JSON.stringify(tasks));

    response.redirect(`/tasks/${id}`); //Redirect to update 
  });
  
  // Delete tasks
  router.delete('/:id', function(request, response){
    const { id } = request.body; //request can now access to body property (body-parser)

    const tasks = JSON.parse(fs.readFileSync('./data/tasks.json'));
    const deletedTasks = tasks.filter(task => task.id !== Number(id));
    fs.writeFileSync('./data/tasks.json', JSON.stringify(deletedTasks));

    response.redirect('/'); //Redirect to update 
  });

  module.exports = router;