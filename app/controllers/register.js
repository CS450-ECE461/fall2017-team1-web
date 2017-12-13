import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createAccount() {
      let { email, password } = this.getProperties(['email', 'username', 'password']);
      let account = this.get('store').createRecord('account', {username: email, password, email});
      let adapterOptions = {signIn: true};

      account.save({adapterOptions}).then(account => {
        console.log('user created successfully!');
        this.transitionToRoute('/');
      }).catch(reason => {
        console.log('error: ' + reason);
      });
    }
  }
});
