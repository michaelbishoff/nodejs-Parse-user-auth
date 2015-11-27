Node.js & Parse User Authentication
-----------------------------------
This uses Node.js, Express, Hogan.js, Parse, and Heroku to create an end-to-end web app that can sign-up, login, and logout users!

## What is Node.js?
[Node.js](//www.nodejs.org) is a backend framework that is used to create a server. The server will pull data from the database, render pages, and route urls to the correct page. Routing is where you declare "/" or "/users" and whenever a request to "www.yourApp.com/" the "/" route is called, or "www.yourApp.com/users" the "/users" route is called.


## What is Parse?
[Parse](//www.parse.com) is a database that is in the cloud! You don't have to \
worry about configuring it, hosting it, or other difficult tasks. You just grab\
 the application's keys and you can access your database with javascript!


## Other Frameworks (you don't need to download)
[Express](http://expressjs.com/) is a backend framework that goes well with Node.js. Express can create scaffolding for your web app and express makes it extrememly easy to get your node app up and running with routes.  

[Hogan.js](http://twitter.github.io/hogan.js/) is a templating framework that we like to use to render a page on the server, then send the html file to the user. Templating is the idea that your html page may contain similar pieces of code, so rather than copying the same nav bar 10 times, you only write the nav bar code once, then include it in another file. Rendering also uses JSON objects to create html tags. For example, you can programmatically create a list of html elements with a simple for loop structure.
 

## Where to start?
1. Download the zip file and extract it. If you have git installed, you can use:  
`git clone https://github.com/michaelbishoff/nodejs-Parse-user-auth.git`

2. [Download Node.js](//www.nodejs.org/) and install the dependencies:  
`cd nodejs-Parse-tutorial && sudo npm install`

3. [Create a Parse account](//www.parse.com) and create a new Javascript app in Parse

4. Grab your Application ID & Javascript Key from your database
  1. Click settings at the top
  2. Click Keys on the left

5. Open `Procfile` and replace the placeholder text with the appropriate keys

6. Execute the command in the `Procfile` without the "web:" prefix:  
`PARSE_APP_ID=APP_ID_PLACEHOLDER PARSE_JS_KEY=JAVASCRIPT_KEY_PLACEHOLDER npm start`
Note: This initializes the environment variables `PARSE_APP_KEY` and `PARSE_JS_KEY`, then starts the server. The env variables only exist while the server is running with this command.

7. Navigate to [localhost:3000](http://localhost:3000) in a browser

You should be able to sign-up, login, and logout of an account using Node.js and Parse!

## Start from scratch
1. Install the express generator  
`npm install -g express-generator`

2. Run `express myAppName --hogan` Note: The `--hogan` means that it will use [Hogan templating](http://twitter.github.io/hogan.js/) rather than the default [Jade templating](http://jade-lang.com/)

3. Follow the instructions that show up
  1. Install dependencies: `cd myAppName && npm install`
  2. Run the app: `DEBUG=myAppName:* npm start`

4. Navigate to [localhost:3000](http://localhost:3000) in a browser

You now have a basic app running with Node.js + Express! It uses Hogan templating to render the page. You still need to implement the Parse functionality, which you can find [in this tutorial's code](https://github.com/umbchackers/nodejs-Parse-tutorial/blob/master/routes/index.js).


## Put your web app On-The-Line
[Heroku](https://www.heroku.com/) is a free to use tool that can be used to deploy your web app to a server with web hosting. This means that you can put your web app online and it will give you a url to access it.  

[The Official Node.js on Heroku Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)  

Our Tutorial (a little more basic):  
Assuming that you did everything in the [Where to start?](https://github.com/umbchackers/nodejs-Parse-tutorial#where-to-start) section above  

1. [Sign up for a Heroku account](https://signup.heroku.com/) and make sure you have [Node.js](//www.nodejs.org) and [npm](https://github.com/npm/npm#synopsis) installed (npm is bundled with Node.js).

2. Download the [Heroku Toolbelt](https://toolbelt.heroku.com/). This is a command line tool that is used to setup your app on heroku.

3. Execute `heroku login` and type in your Heroku account information.

4. Run `heroku create` to create a new server to deploy your app to. This generates a random unique name for your app and url.  
Note: this command takes a third optional argument which is the name of your app and url. For example, this tutorial used:  
`heroku create donut-tutorial` to create https://donut-tutorial.herokuapp.com/

5. Deploy your code to the webapp `git push heroku master`

6. Open your web app in a browser `heroku open`  
Note: If you ever forget the name of your web app, running this command will open the heroku app (that is in the current directory) in a browser.

## Resources
- [Node.js](//www.nodejs.org)
- [Express](http://expressjs.com/)
- [Hogan.js](http://twitter.github.io/hogan.js/)
- [Parse](//www.parse.com)
- [Heroku](https://www.heroku.com/)
- [Brackets text editor](http://www.brackets.io)