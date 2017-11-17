import Gatekeeper from 'ember-cli-gatekeeper';
import { inject as service } from '@ember/service';

export default Gatekeeper.SignInRoute.extend({
  userService: service('user'),

  deactivate() {
    this.get('userService').loadUserInfo();
  }
});
