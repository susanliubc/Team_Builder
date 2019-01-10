import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

Meteor.startup(() => {
   ServiceConfiguration.configurations.remove({
        service: "google"
      });
    
  ServiceConfiguration.configurations.upsert(
    { service: 'google'},
    {
        $set: {
            clientId: Meteor.settings.private.google.clientId,
            loginStyle: 'popup',
            secret: Meteor.settings.private.google.secret
        }
    });
});