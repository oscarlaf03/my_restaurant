# My Restaurant Menu App
This an example of a Vue application using Vuex library to manager the store of the applications.
It is connected to an expres JS backend. 
It mocks a database by reading and writing into json files.

## How to run?
Back-end and Front-end are "independent" projects but they are paired together in this repo, after cloning this repo into yout local machine start them up simulatenoysly on different terminals

### Run the backend

  -  From the root folder of the project enter into the backend folder
```
cd back_end
```
  - Once there install the dependencies on package.json use npm or yarn, up to you
```
npm install
```

  - [X] implement notifications
  - [] Present message of order created sucessfully after deletion of the cart
  - [X] Category filter on menu
  <!-- - [] handle 4xx and 5xx with error pages -->
-  [ ]add catch statement on every Promise, decide between, user notification, logging, or a retry
