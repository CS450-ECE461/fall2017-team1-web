import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  inMainApp: computed('currentRouteName', function() {
    return this.get('currentRouteName') !== 'login';
  })
});
