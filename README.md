# My Restaurant Menu App
This is an example of a Vue application using Vuex library to manage the store of the application.
It is connected to an express JS backend. 
It mocks a database by reading and writing into json files.

### Key features
  - Users can filter menu items according the menu category of their choosing
  - Users can add menu items to their "Cart" from the root page
  - Users can follow the link in the navbar to the Order submission page and have one last chance to make any final modification to their order before entering their payment info and submitting the order **the payment info field can be any string**
  - Users get interactive notifications along their order journey whenever they add or remove items to their cart
  - Users can empty their cart without sumbitting to start over again
  - Submitted orders get saved on the back-end and are listed on the orders page

## How to run?
Back-end and Front-end are "independent" projects but they are paired together in this repo, after cloning this repo into yout local machine start them up simultanously on different terminals

### Run the back-end

  -  From the root folder of the project enter into the back_end folder
```
$ cd back_end
```
  - Once there install the dependencies on `package.json` use npm or yarn, up to you
```
$ npm install
```
  - Now start up the server, it is configured to run on `localhost:3000`
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

### Now we are ready to take your order at  http://localhost:8080/ 

#### Requirements

  - node v14.15.0
