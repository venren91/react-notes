## React Notes
A simple React notes application bootstrapped with  [Create React App](https://github.com/facebook/create-react-app). Scope of this project is to learn and understand the react, redux (for frontend) and node js (for backend api development) that connects to mongoDB. This application additionaly has a docker file that can be used to run the app locally.

## How to run this application
1) Run mongodb docker container: `docker run -d -p 27017:27017 mongo`
2) Start the server: from the server folder, execute `node server.js`. This command should start
the server listening to port 8080 and connect to mongodb server. Please note, if you have mongodb installed in different location, change the db.js file accordingly.
3) Start ui server: `npm start react`


### Some of the included tools/libraries

* [React](https://github.com/axios/axios)
* [Redux](https://github.com/expressjs/express)
* [Mongodb](https://github.com/helmetjs/helmet)


## Pending tasks
| Tasks         | Status           | Comments  |
| ------------- |:-------------:| -----:|
| React App config and setup      | Completed | :heavy_check_mark:  |
| Ability to add/delete notes     |       |    |
| Add redux store to save the notes |  Completed    |    |
| Add middleware to log the store state changes | | |
| [Use aysnc to update store](https://www.youtube.com/watch?v=tfuZ7uZmVyg&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=7) | | | 
| Steps to deploy this app in production env |||
| Frameworks for unit testing react app |||
| Learn about basic config and set up of nosql database  |  Completed (using mongodb)  |    |
| Use NoSql database to store the notes | | In progress (using mongodb with node, express for API development |
| Add text search functionality for notes | |

## Tutorials followed for this project
* [react & redux - egghead] (https://egghead.io/lessons/react-redux-implementing-combinereducers-from-scratch)
* [react & redux basics - youtube](https://www.youtube.com/watch?v=tfuZ7uZmVyg&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=7)
* [react & redux - netninja] (https://www.youtube.com/watch?v=f87wPQMgF4c&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=39)
* [node js with express to connect to Mongo DB](https://www.youtube.com/watch?v=fsCjFHuMXj0)

## Learn More

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
