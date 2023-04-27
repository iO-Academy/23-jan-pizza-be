# **23-jan-pizza-toppings-app-be**


This app allows users to select their favorite pizza toppings from a list of options. The app is built using React on the front end and Node/Express on the back end, with a MongoDB database for storing the toppings data.

This is a To Do Node API using Express with a MongoDB database and Jest for testing.

# **Getting started**

To run the app locally, you will need to the following. The front end app can be accessed here - https://github.com/iO-Academy/23-jan-pizza-fe

1. You must have node installed on your machine.

2. You must have MongoDb installed with a database named toppings and a collection named toppings.  Use the json data in todos.json to populate the toppings collection.

# **Getting started**

1. Clone the repository to your local machine:

````
git clone <repository-url>
````

2. Run npm install in the terminal from the root of the project to install all dependencies.

````
npm install
````

3. Run nodemon start.js in the terminal from the root of the project.

````
nodemon start.js
````

The API should now be running on localhost:8000.

# API ENDPOINT 

**Get all toppings**

Returns json data detailing all of the toppings in the `toppings` collection.

* **URL**

  /toppings

* **Method:**

  `GET`
  
* **Success Response:**

  ````
    {
    "message": "all toppings displayed",
    "data": [
        {
            "_id": "[OBJECT ID]",
            "name": "[TOPPING NAME]",
            "img": "[TOPPING IMAGE NAME]",
            "category": "[1 / 2 / 3]"
        },
        {
            "_id": "[OBJECT ID]",
            "name": "[TOPPING NAME]",
            "img": "[TOPPING IMAGE NAME]",
            "category": "[1 / 2 / 3]"
        }
      ],
    "status": 200
  }
  ````

# **Testing**

Jest has been installed for testing, to run tests - input the below in the command line within the project directory

````
npm tests
````

# **Built with**
- Node.js - Back end runtime environment
- Express - Back end framework
- MongoDB - Database for storing toppings data

# **Authors**
Steph-ski, Yas-Shen, nesclark
