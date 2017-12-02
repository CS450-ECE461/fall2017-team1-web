import Route from '@ember/routing/route';
import $ from 'jquery';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    return hash({
      conversation: $.ajax(`http://localhost:5000/v1/messages/${this.get('gatekeeper.currentUser.id')}`, {
        method: 'GET',
        data: { userId: params.user_id },
        headers: { Authorization: `Bearer ${this.get('gatekeeper.accessToken.access_token')}` }
      }),

      recipient: this.get('store').find('user', params.user_id)
    });
  }
});
