# robaraujo-website

Lets put a fresh coat of paint on an old website, [robaraujo.com](http://robaraujo.com)

## What's wrong with the old site?

Couple of things

* PHP backend
  * No PHP framework to manage requests or even separate queries from presentation data
  * PHP is pretty old tech in 2019
  * 0 structure whatsoever, every page is its own set of PHP logic
  
* Performance is not so great
  * Image resolutions are too high
  * SQL server / database to just get URLs
  
* SQL Database
  * The only mechanism by which Rob can update content on the site, using PHPMyAdmin
  * SQL database is being used as just a data store for trivial data like URLs. No complex SQL operations are ever done.
  
* Front end is lacking
  * Not using any kind of reusable template / component based system for front end
  * CSS is not well structured
  * User Experience leaves much to be desired
  
## How do we fix this?

* Use a backend with a framework. This is a simple website, we don't need a Spring backend running on 10 distributed EC2 instances. A simple, structured, RESTful backend will do fine. We're not building a 'realtime' application, or an application that's computationally intense. Just routing, some validation logic, and reading / writing to from a filesystem (or DB) on minimal data.

* No SQL for trivial data, read data from a JSON file instead (or use something more lightweight than MySQL Server). Cache, cache, cache. No sending 3MB images to the client. Reduce it or if needed, lazy load the full res image in.

* Build a CMS for Rob to make changes to the JSON data store, and not use PHPMyAdmin.

* Use some structured front end system, angular, vue, react, etc. Are all of these overkill for a basic website? Maybe. But, at least they provide structure for reusing components / templates. Lots of tools available as well to get basic things done quickly (forms, layouts, navigation, etc). Use SCSS or Styled components.

* Look into actually hooking into Facebook / Instragram APIs instead of injecting iframes so the site can update dynamically.

## Tools

* Backend - Node / Express
* Frontend - React / Webpack / Bootstrap
* Quality of life tools - Prettier / Nodemon / Babel
* Data Store - Mongo DB

### TypeScript?

Nah, and while I ❤️ TypeScript, I think for this small website we don't need it.

### Redux?

Nah, this is not a single page application with state, its a static web page for displaying content. There's a form, thats about it. Not worth using Redux.

## TODO

Mostly for myself to keep track of what needs to be done.

- [x] Setup
- [x] Setup Routing with React Router and Express
- [x] Frontend file structure
- [x] Backend file structure
- [x] static data from node server via REST API
- [x] fetch() data from server in pages, render out data
- [x] Add CSS / Styled components to match presentation from previous site
- [x] Optimize images
- [x] Add signature to nav
- [ ] Responsive Nav
- [ ] Form component
- [ ] Form validation
- [ ] Form data processing
- [ ] Clean up CSS / Styled components
- [ ] Set up persistant data store
- [ ] Admin portal for updating data store

## The Application

Shout out to [simple-react-full-stack](https://github.com/crsandeep/simple-react-full-stack) for the boilerplate setup.

### Install

Install dependencies using npm / yarn.

```
npm install
```

### Run for development

To start the application in dev mode, run

```
npm run dev
```

this will start both the client and server and dev mode.

To start just the client in dev mode, run

```
npm run client
```

To start the server in non dev mode, run

```
npm run server
```

### Build for production

To build the client and start the server, run

```
npm run start
```

To just build the client, run

```
npm run build
```

 
