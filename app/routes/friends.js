import Route from '@ember/routing/route';
import { allSettled } from 'rsvp';
import $ from 'jquery';

export default Route.extend({
  model(params) {
    let url = `http://localhost:5000/v1/friend/${this.get('gatekeeper.currentUser.id')}`;

    return $.getJSON(url).then((response) => {
      let friendPromises = response.map((userObject) => {
        let otherUserId = (userObject.user1 !== this.get('gatekeeper.currentUser.id')) ? userObject.user1 : userObject.user2;
        return this.get('store').find('user', otherUserId);
      });
      return allSettled(friendPromises).then((friends) => friends.map((friend) => friend.value));
    });
  }
});
