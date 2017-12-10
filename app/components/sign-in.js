import SignInComponent from 'ember-cli-gatekeeper/-lib/components/sign-in';
import { computed } from '@ember/object';

export default SignInComponent.extend({
  classNames: ['sign-in-container'],

  disabled: computed('username', 'password', function() {
    return !this.get('username') || !this.get('password');
  })
});
