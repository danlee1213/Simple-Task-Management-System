# Simple-Task-Management-System
Simple Task Management Web using Restful API

## Description
Web application using Restful API with CRUD operations. It would help to schedule, manage tasks in a real time basis.

## Tech Stack
### Front-End
* HTML
### Back-End
* Node.js (Express.js as a framework)
### Client-server communication protocol
* Restful API
* CRUD operations
### Install (Node.js) 
For both Windows and Mac os:

Install [node.js](https://nodejs.org/en/download/) first,

Open terminal and change directory to download path:
```
cd <download-path>
```
Install package modules:
```
npm install
```
Open terminal and then execute app.js:
```
node app.js
```
But for better management, install [PM2 module](https://www.npmjs.com/package/pm2):
```
npm install pm2 -g
```
Using PM2 module to execute app.js (Ignore server to be shut down for any changes in "data" directory):
```
pm2 start app.js --watch --ignore-watch="data/*" --no-daemon
```
Open web browser and access:
```
localhost:3000
```
### Install (Django)
### Test
Using [Postman](https://www.postman.com/) to test whether the API gets response from data in JSON format
