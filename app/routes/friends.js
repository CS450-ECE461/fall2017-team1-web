import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').query('user', {friends : true});
  }//TODO: Find query and manipulate
  //ALSO: Ask Nate to return something different from friends.
  //OR: Use promises [.then(etc)] to query database with friend ids
});
