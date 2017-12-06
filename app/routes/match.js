import Route from '@ember/routing/route';

export default Route.extend({
  deactivate() {
    this.set('controller.choosingFeeling', true);
    this.set('controller.loading', false);
    this.set('controller.showProfile', false);
  }
});
