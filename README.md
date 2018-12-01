# robaraujo-website

Lets put a fresh coat of paint on an old website, http://http://robaraujo.com

## What's wrong with the old site?

Couple of things...

* PHP backend
  * No PHP framework to manage requests or even seperate queries from presentation data
  * PHP is dead
  
* Performance is not so great
  * Image resolutions are high
  * There's a SQL database to just get URLs
  
* SQL Database
  * The only mechanism by which Rob can update content on the site, using PHPMyAdmin
  * SQL database is being used as just a data store for trivial data like URLs. No complex SQL operations are ever done.
  
* Front end is lacking
  * Not using any kind of reusable template / component based system for front end
  * CSS is not well structured
  * User Experience leaves much to be desired.
  
## How do we fix this?

* Use any other backend with a framework. This is a simple website, we don't need a Spring backend running on 10 distributed EC2 instances. A simple, structured, RESTful backend will do fine. We're not building a 'realtime' application, or an application thats computationally intense. Just routing, some validation logic, and reading / writing to from a filesystem on minimal data.

* Stop using SQL for trivial data, read data from a JSON file instead (or use something more lightweight than MySQL Server). Cache, cache, cache. Stop sending 3MB images to the client, reduce that crap or if you 100% need the full resolution lazy load it or something.

* Build a CMS for Rob to make changes to the JSON data store, and not use PHPMyAdmin.

* Use some structured front end system, angular, vue, react, etc. Are all of these overkill for a basic website? Maybe. But, at least they provide structure for reusing components / templates. Lots of tools avalible as well to get basic things done quickly (forms, layouts, navigation, etc). Use SCSS or Styled components.

* Look into actually hooking into Facebook / Instragram APIs instead of injecting iframes so the site can update dynamically.

## Stack

* Backend - Node / Express
* Frontend - React / Webpack
* Quality of life tools - Prettier / Nodemon / Babel
* Data Store - JSON files / Mongo ? TBD.

### TypeScript?

Nah, and while I ❤️ TypeScript, I think for this small website we don't need it.

### Redux?

Nah, this is not a single page application with state, its a static webpage for displaying content. There's a form, thats about it. Not worth using Redux.
