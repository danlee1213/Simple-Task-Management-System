# Simple-Task-Management-System
Simple Task Management Web using Restful API

## Description
Web application using Restful API with CRUD operations. It would help to schedule, manage tasks in a real time basis.

## Tech Stack (Nodejs)
### Front-End
* HTML
### Back-End
* Node.js (Using Express.js as a framework)
### Client-server communication protocol
* Restful API
* CRUD operations
### Install 
**For both Windows and Mac OS:**

Download all files in the folder 'Nodejs' in this repo,

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
## Tech Stack (Django)
### Front-End
* No frontend, only Rest API server
### Back-End
* Django (Using Django REST Framework as a framework)
### Install
**For windows:**

Download all files in the folder 'Django' in this repo,

Install [python 3](https://www.python.org/downloads/),

Open command prompt, execute get-pip.py:
```
python get-pip.py
```
Install virtualenv:
```
pip install virtualenv
```
Navigate to your project:
```
cd <project-folder>
```
Within the project folder, make virtualenv:
```
virtualenv myenv
```
Activate the virtualenv:
```
<project-folder>\myenv\Scripts\activate
```
If you successfully access to the virtualenv (myenv), install Django:
```
pip install django
```
Install Django REST Framework as well:
```
pip install djangorestframework
```
Put downloaded 'Django' folder in your project folder then navigate to 'Rest API' folder inside 'Django' folder:
```
cd <project-folder>/Django/Rest API
```
Run Django server:
```
python manage.py runserver
```
Open web browser and access:
```
http://127.0.0.1:8000/viewset/task/
```

**For Mac OS:**

Download all files in the folder 'Django' in this repo,

Open terminal and install python 3 using [Homebrew](https://brew.sh/#install):
```
brew install python3
```
Install virtualenv:
```
pip3 install virtualenv
```
Make virtualenv:
```
virtualenv -p python3 <desired-path>
```
Activate the virtualenv:
```
<desired-path>/bin/source ./activate
```
If you successfully access to the virtualenv (desired-path), install Django:
```
pip install django
```
Install Django REST Framework as well:
```
pip install djangorestframework
```
Put downloaded 'Django' folder in your project folder then navigate to 'Rest API' folder inside 'Django' folder:
```
cd <desired-path>/Django/Rest API
```
Run Django server:
```
python manage.py runserver
```
Open web browser and access:
```
http://127.0.0.1:8000/viewset/task/
```

### Test
**Node.js**:
Using [Postman](https://www.postman.com/) to test whether the API gets response from data in JSON format

**Django**:
Django rest framework provides itself to test GET / POST / PUT / DELETE operations

For GET / POST:
http://127.0.0.1:8000/viewset/task/

For GET / PUT / DELETE:
http://127.0.0.1:8000/viewset/task/9/ (Put id number after 'task/')

