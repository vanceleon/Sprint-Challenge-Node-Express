# Review Questions

## What is Node.js?
    Its a free open source server environment that allows for JS to be run outside the browser.

## What is Express?
    Provides a way to break an application up and have different requests at each URL, a feature called Routing

## Mention two parts of Express that you learned about this week.
    Server-side Routing
    Middleware
    Deployment and code organization through the use of Router()


## What is Middleware?
    Middleware is a way for the developer to provide/extend additional features to the code such as app authentication 


## What is a Resource?
    Associated with REST. Representation State Transfer 
    resource is accessible by URl, multiple representations
    done over stateless protocol, and management of resources done through HTTP methods

## What can the API return to help clients know if a request was successful?
    res.status(200-299) range


## How can we partition our application into sub-applications?
    By setting up different js files that handle specific things to clean master js file. Primarily done through the use of router in the application

    const router = express.Router();


## What is express.json() and why do we need it?
    Express takes all the information that the client added to the body and makes it a JS object.
    Needed so we can run CRUD operations on it.