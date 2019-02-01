# Team builder
Team management web application build with Meteor.js and React

Front end: React, Bootstrap, Semantic UI

Database: mongoDB(mLab)

Backend(server and authentication): Meteor Accounts-base Accounts-password Accounts-Google
(OAuth login)

Routing: React-router v4

1. General flow of how to use app

Register page: Input username/email/password -> Submit

Login page: Input username/password -> Submit or Login with google

Personal page: Input firstname/lastname/email -> Submit

Teams page: Select firstname/lastname in the dropdown box -> Input the name information in the searchbox -> Information will show up below -> Input the teamname/membername submit -> A list of teams will show up

Personal page: Your team will show up

2. How do you structure the data?

Three collections have been created including users(for meteor accounts), Users, Teams

users: username: String, email: String, password: String

Users: firstName: String, lastName: String, email: String

Teams: teamName: String, memberName: Array('memberName.$': String)

3. What was chanllenging, what you strugguled with?

The changllening part is the application of assigned html template to Meteor/React model, it didn't display normally so I took quite a lot of time to tweak it. What I struggled with is the mongoDB part from the schema creation to the connection with database. Meteor mongo has a few unique feature s like publish/subscribe/allow policies.

4. What would you like to implement or work if you had more time?

Implement restricted Navbar routing. I had done the restricting routing in the App.js, will do it in the Navbar level.

Add documentations.

Also will take a look at semantic ui displaying.
