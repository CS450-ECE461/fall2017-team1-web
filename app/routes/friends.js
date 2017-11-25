import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').query('user', { friends: true }).then((response) => {
      response.forEach(function(userId) {
        if (userId.user1 == `${this.get('gatekeeper.currentUser.id')}`) {
          // console.log(userId.user2);
        } else {
          // console.log(userId.user1);
        }
      });
    });
  }// TODO: Find query and manipulate
});
