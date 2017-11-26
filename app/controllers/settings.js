import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  storage: service('local-storage'),

  ageRange: {
    min: 18,
    max: 100
  },

  ageStart: [30, 40],

  distanceRange: {
    min: 5,
    max: 50
  },

  startDistance: 25,

  actions: {
    signOut() {
      this.get('storage').clear();
      this.get('gatekeeper').signOut().then(() => {
        this.replaceRoute('login');
      }).catch(() => {
        this.get('gatekeeper').forceSignOut();
        this.replaceRoute('login');
      });
    },

    settingChanged(settingName, value) {
      console.log(settingName, 'changed to', value);

    }
  }
});
