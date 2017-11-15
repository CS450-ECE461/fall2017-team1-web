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
  this.route('profile');
  this.route('messages');
  this.route('direct-message', { path: '/messages/:user_id' });
});

export default Router;
