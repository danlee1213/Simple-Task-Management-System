const express = require('express');
const router = express.Router();
const template = require('../lib/template.js');

//Routing
//Home page
router.get('/', function(request, response){
    const title = 'Welcome to the system';
    const description = 'This is the simple task management system. You could add, update, and delete your tasks';
    const list = template.list(request.list);
    const html = template.HTML(title, list,
      `
      <h2>${title}</h2>${description}
      <img src="/images/sample.jpg" style="width:350px; display:block; margin-top:15px;">
      `,
      `<a href="/tasks/create_page">create</a>`
    );
    response.send(html);
  });

  module.exports = router;