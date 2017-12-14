import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount() {
      let { email, password } = this.getProperties(['email', 'username', 'password']);
      let account = this.get('store').createRecord('account', { username: email, password, email });

      account.save({ adapterOptions: { signIn: true } }).then(() => {
        this.transitionToRoute('/');
      });
    }
  }
});
