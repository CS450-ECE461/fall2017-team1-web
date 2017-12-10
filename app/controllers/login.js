import Gatekeeper from 'ember-cli-gatekeeper';
import { inject as service } from '@ember/service';

export default Gatekeeper.SignInController.extend({
  userService: service('user'),

  actions: {
    completeLogin() {
      this.get('userService').loadUserInfo();
      this.send('signInComplete');
    }
  }
});
