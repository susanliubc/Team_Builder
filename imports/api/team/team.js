import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

//create a meteor collection
const Teams = new Mongo.Collection('Teams');

//create a schema associated with the collection

const Schemas = {};
Schemas.Team = new SimpleSchema({
    teamName: {
        type: String,
        label: 'team name'
    },
    memberName: {
        type : Array,
        label: 'member name'
    },
    'memberName.$': {
        type: String,
        label: 'member'
    },
    owner: {
        type: String,
        label: 'owner'
    }
}, { tracker: Tracker });

//attach schema to the collection
Teams.attachSchema(Schemas.Team);

//export collection
export { Teams };
