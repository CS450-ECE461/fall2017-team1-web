import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import $ from 'jquery';

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
      let json = {};
      if (settingName === 'ageRange') {
        json = {
          'minAgeOfDog': value[0],
          'maxAgeOfDog': value[1]
        };
      } else if (settingName === 'vetVerificationC') {
        json[settingName] = value === 'true';

      } else {
        json[settingName] = value;
      }
      $.ajax({
        url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/criteria`,
        type: 'PUT',
        data: json,
        headers: { Authorization: `Bearer ${this.get('gatekeeper.accessToken.access_token')}` }
      });
    }
  }
});
