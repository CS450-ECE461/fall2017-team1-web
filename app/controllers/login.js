import Gatekeeper from 'ember-cli-gatekeeper';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default Gatekeeper.SignInController.extend({
  userService: service('user'),

  actions: {
    completeLogin() {
      this.get('userService').loadUserInfo();
      this.send('signInComplete');
    }
  }
});
