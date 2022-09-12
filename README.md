*************************************
DONE BY MICHAEL MOGILKIANSKI
*************************************
FULL-STACK WEB APPLICATION: CRUD REALIZATION 
USING DJANGO AND FLASK
****************************************

This project is a CRUD realization on a full stack web application. 

************************************************************************
* Backend
The server side has been built using Django and its sub libraries like
Django REST framework. 

Includes:
1. URLs 
2. Management of requests to server 
3. Providing full CRUD:
Create,Read,Update,delete 
4. SQLite DataBase which include model(table) which recivies requests
from the server 

***********************************************************************
How To Run Backend (Server)
1. Delete the exist virtual enviroment - delete the myenv folder
2. create yours venv :
* go to your CLI
* type following lines :
pip install virtualenv
py -m virtualenv myenv
Activate: myenv\Scripts\activate

this should prevent this project to somehow effect your other works (venv)
3. type :
pip install -r .\requirements.txt 
this will install all required modules and packages 

4. run the back : 
CLI: python manage.py runserver 

**************************************************************************
* Frontend
The client side built using React.js, React-bootstrap, Toastify module 

Includes:
1. Responsive page which containes different components using React DOM
2. Change responsive variables using parameters transfer with props func
and using useState hook for variables 
3. Sending requests to our server using AXIOS function 
4. Sending params from componet to toher component 
5. Designed page using React-BootStrap and Toastify lib 

**************************************************************************
How To Run Frontend
1. open front dir 
2. in your CLI type:
npm i 
-this will install missing packages 
3. on your CLI type:
npm start
- A new window in your browser should be created -this is the app page


