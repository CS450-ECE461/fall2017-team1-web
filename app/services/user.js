import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  gatekeeper: service(),
  store: service(),

  currentUser: null,

  loadUserInfo() {
    let id = this.get('gatekeeper._currentUser.id');

    if (id) {
      return this.get('store').findRecord('user', id).then((user) => {
        this.set('currentUser', user);
      });
    }
  },

  init() {
    this.loadUserInfo();
  }
});
