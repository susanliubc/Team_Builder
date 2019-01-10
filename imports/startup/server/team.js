import { Meteor } from 'meteor/meteor';
import { Teams } from '../../api/team/team.js';

//Initialize database with a default data document
function addData(data) {
    console.log(` Adding: ${data.teamName} (${data.owner})`);
    Teams.insert(data);
};

//Initialize collection if empty
if(Teams.find().count() === 0) {
    if(Meteor.settings.defaultData) {
        console.log('Creating default data');
        Meteor.settings.defaultData.map(data => addData(data));
    }
};

//Allow insert & update
Teams.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return modifier._id === userId;
    }
});

//This subscription publish only the documents associated with the logged in user
Meteor.publish('Teams', function publish() {
    if(this.userId) {
        const username = Meteor.users.findOne(this.userId).username;
        return Teams.find({ owner: username });
    }
    return this.ready();
});

