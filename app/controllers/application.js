import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  user: service(),

  currentUser: computed.alias('user.currentUser'),

  inMainApp: computed('currentRouteName', function() {
    return this.get('currentRouteName') !== 'login';
  })
});
