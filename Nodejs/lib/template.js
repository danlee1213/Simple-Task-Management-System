module.exports = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">Simple Task Management System</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    //Processing task lists
    while(i < filelist.length){
      list = list + `<li><a href="/tasks/${filelist[i].id}">Title: ${filelist[i].title}</a></li>
      <ul>Description: ${filelist[i].description}</ul>
       ${filelist[i].expire_date ? `<ul>(optional) Expire date: ${filelist[i].expire_date}</ul>` : ''}`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}
