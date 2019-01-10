import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

//create a meteor collection
const Users = new Mongo.Collection('Users');

//create a schema associated with the collection

const Schemas = {};
Schemas.User = new SimpleSchema({
    firstName: {
        type: String,
        label: 'first name'
    },
    lastName: {
        type: String,
        label: 'last name'
    },
    email: {
        type: String,
        label: 'email'
    },
    owner: {
        type: String,
        label: 'owner'
    }
}, { tracker: Tracker });

//attach schema to the collection
Users.attachSchema(Schemas.User);

//export collection
export { Users };
