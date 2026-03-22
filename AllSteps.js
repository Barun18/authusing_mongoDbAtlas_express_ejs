//! All steps for creating an authentication system using express + Ejs + mongoose
//TODO:-- create package.json
//  npm init -y
//TODO:-- install all required dependencies
// npm i express  cookie-parser bcrypt jsonwebtoken ejs
//TODO:-- create a basic server
//Importing the express and using this call get() and send son=me response to the port
//TODO:-- require(because we use coomonjs) all necessary packages
// cookieParser, path
//? I have use 'ejs' to render HTML pages  and send the variable value
// LIKE:-- app.set("view engine","ejs")
//         res.render("HTML file name",{name:"barun"})
//? static() indicates to the express to serve static files.
//? express.static(path.join(__dirname, 'public'))--> serve static files from public folder.
//! From now Authentication and Authorization is started
//TODO:-- Create two folder: views( contains all html pages) and public(contains all static pages)
//? Inside public folder create another 3 folders name: images,stylesheets,javascript
//? Inside  views folder create index.ejs file 
//! what i have to do next
//? (a) acreate user account
//? (b) set up mongoes
//? (c) create schema
//? (d) create model
//? (e) usercreate -> password -> hash
//? (f) jwt token -> cookie
//? (g) login-> token -> decrypt--> email
//TODO:- iinstall mongoose
//? create a folder models.And inside the model create a file user.js
//? Inside user.js create connection with mongoDB by connecting string and create userSchema and then export it
//? use this schema inside app.js(main file) and create a form for get the user data inside index.ejs 
//? destructure user form information from req.body 
//? insert the userdata into mongoDB through userModel.create({ all form entries}) 
//? send the response of created user information
//TODO:-- Now with the help of bcrypt we can create salt and hash the password 
//? After hashing the password it will be assigened to user's password
//? Now finally hashed password and user rremaining data are to be stored inside database
//TODO: use jwt to send the token to the browser for next time sending the request
//?
