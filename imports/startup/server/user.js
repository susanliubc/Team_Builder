import { Meteor } from 'meteor/meteor';
import { Users } from '../../api/user/user.js';

//Initialize database with a default data document
function addData(data) {
    console.log(` Adding: ${data.email} (${data.owner})`);
    Users.insert(data);
};

//Initialize collection if empty
if(Users.find().count() === 0) {
    if(Meteor.settings.defaultData) {
        console.log('Creating default data');
        Meteor.settings.defaultData.map(data => addData(data));
    }
};

//Allow insert & update
Users.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return modifier._id === userId;
    }
});

//This subscription publish only the documents associated with the logged in user
Meteor.publish('Users', function publish() {
    if(this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return Users.find({ owner: username });
    }
    return this.ready();
});

