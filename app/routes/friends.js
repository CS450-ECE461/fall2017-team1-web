import Route from '@ember/routing/route';
import allSettled from 'rsvp';

export default Route.extend({
  model(params) {
    return this.get('store').query('user').then((response) => {
      let friendPromises = response.map((userObject) => {
        let otherUserId = (userObject.user1 !== this.get('gatekeeper.currentUser.id')) ? userObject.user1 : userObject.user2;
        return this.get('store').find('user', otherUserId);
      });
      return allSettled(friendPromises);
    });
  }// TODO: Find query and manipulate
});

