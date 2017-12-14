import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
  model() {
    return $.ajax({
      url: `http://localhost:5000/v1/user/${this.get('gatekeeper.currentUser.id')}/criteria`,
      type: 'GET',
      headers: { Authorization: `Bearer ${this.get('gatekeeper.accessToken.access_token')}` }
    });
  }
});
