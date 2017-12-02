import Controller from '@ember/controller';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
  message: null,

  hasMessage: computed.bool('message'),

  actions: {
    sendMessage() {
      $.ajax(`http://localhost:5000/v1/messages/${this.get('gatekeeper.currentUser.id')}`, {
        method: 'POST',
        data: {
          to: this.get('model.recipient.id'),
          message: this.get('message')
        },
        headers: { Authorization: `Bearer ${this.get('gatekeeper.accessToken.access_token')}` }
      });

      this.get('model.conversation').push({
        from: this.get('gatekeeper.currentUser.id'),
        to: this.get('model.recipient.id'),
        message: this.get('message')
      });

      this.notifyPropertyChange('model');
      this.set('message', '');
    }
  }
});
