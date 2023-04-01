# IKNITE FITNESS API

Iknite Fitness app is a mobile application for fitness and general body well being. <br>
It features a set of exercises categorized to give users a suitable experience and a good time stretching and doing workouts at home.
* The front end is build with react native and is hosted at https://github.com/sambacarlson/iknite-fitness
* The backend code is is hosted at https://iknite-fitness.onrender.com/
* hit the provided endpionts by appending the endpoint on the table below to the hosted link above. <br>
___For example___ : https://iknite-fitness.onrender.com/exercises to get json of exercises 

### TABLE OF ENDPOINTS


| STATUS  | METHOD | ENDPOINT          | RESPONSE 
| --------|--------|-------------------|----------
| DOWN    | GET    | `/`               | list of all endpoints 
| UP      | GET    | `/categories`     | json of all categories 
| UP      | POST   | `/categories`     | creates a category
| UP      | GET    | `/exercises`      | json of all exercises
| UP      | POST   | `/exercises`      | creates an exercise
| TESTING | PUT    | `/categories/:id` | updates category with given id
| UP      | DELETE | `/categories/:id` | deletes category with given id
| TESTING | PUT    | `/exercises/:id`  | updates exercise with given id
| UP      | DELETE | `/exercises/:id`  | deletes exercise with given id

<br>

### CATEGORY MODEL

* `title`: String, required <br>
* `description`: String, required <br>
* `image`: String, required

### EXERCISE MODEL

* `title`: String, required
* `description`: String, required
* `duration`: Number, required
* `rest`: Number, required: true, default: 5
* `category`: [String], required
* `images`: type: [String]