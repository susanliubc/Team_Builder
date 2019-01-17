import { Meteor } from 'meteor/meteor';
import { ServiceConfiguration } from 'meteor/service-configuration';

const settings = Meteor.settings.google;

if (settings) {
   ServiceConfiguration.configurations.remove({
        service: "google"
      });
    
  ServiceConfiguration.configurations.upsert(
    { service: 'google'},
    {
        $set: {
            clientId: settings.clientId,
            loginStyle: 'popup',
            secret: settings.secret
        }
    });
};
