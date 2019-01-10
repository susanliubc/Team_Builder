import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

function createUser(username, password, role) {
    console.log(` Creating user${username}.`);
    const userID = Accounts.createUser({
        username: username,
        email: email,
        password: password
    });
    if(role === 'admin') {
        Roles.addUsersToRoles(userID, 'admin');
    }
}

//When running app for the first time, pass a settings file to set up a default account

if(Meteor.users.find().count() === 0) {
    if(Meteor.settings.defaultAccounts) {
        console.log('Creating the default user');
        Meteor.settings.defaultAccounts.map(
            ({ username, password, role }) => createUser(username, password, role)
        );  
    } else {
        console.log('Cannot initialize the database! Please invoke meteor with a settings file')
    }
}