import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('settings');
  this.route('friends');
  this.route('match');
  this.route('messages');
  this.route('direct-message', { path: '/messages/:user_id' });
  this.route('dogs', { path: '/dogs/:dog_id' });
  this.route('registration');
  this.route('users', { path: '/users/:user_id' });
  this.route('loading');
});

export default Router;
