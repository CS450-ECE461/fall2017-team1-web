import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { later, cancel } from '@ember/runloop';
import $ from 'jquery';

export default Controller.extend({
  message: null,

  hasMessage: computed.bool('message'),

  fetchTimer: null,

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
  },

  fetchMessages() {
    $.ajax(`http://localhost:5000/v1/messages/${this.get('gatekeeper.currentUser.id')}`, {
      method: 'GET',
      data: { userId: this.get('model.recipient.id') },
      headers: { Authorization: `Bearer ${this.get('gatekeeper.accessToken.access_token')}` }
    }).then((response) => {
      this.set('model.conversation', response);
      this.set('fetchTimer', later(this, this.fetchMessages, 1000));
    });
  },

  beginFetching() {
    this.set('fetchTimer', later(this, this.fetchMessages, 1000));
  },

  cancelFetching() {
    cancel(this.get('fetchTimer'));
  }
});
