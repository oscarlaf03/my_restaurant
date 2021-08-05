# My Restaurant Menu App
This an example of a Vue application using Vuex library to manager the store of the applications.
It is connected to an expres JS backend. 
It mocks a database by reading and writing into json files.

## How to run?
Back-end and Front-end are "independent" projects but they are paired together in this repo, after cloning this repo into yout local machine start them up simulatenoysly on different terminals

### Run the back-end

  -  From the root folder of the project enter into the back_end folder
```
$ cd back_end
```
  - Once there install the dependencies on package.json use npm or yarn, up to you
```
$ npm install
```
  - Now start up the server, it is config to run on `localhost:3000`
```
$ npm start
```
  - Your terminal should look roughly like this:
```
Find the server at: http://localhost:3000/
```

### Run the front-end
  -  From the root folder of the project enter into the front_end folder
```
$ cd front_end
```
  - Once there install the dependencies on package.json use npm or yarn, up to you
```
$ npm install
```
 - Now start up the Vue app, following the `serve` command below, it is configured to run on `localhost:8080`
```
$ npm run serve
```
  - Your terminal should look roughly like this:
```
 App running at:
  - Local:   http://localhost:8080/ 
```

** Now we are ready to take your order at  http://localhost:8080/  **

#### Requirements

  - node
  - vue-cli
