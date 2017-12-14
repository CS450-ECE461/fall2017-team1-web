import Controller from '@ember/controller';

export default Controller.extend({
<<<<<<< HEAD
//  actions: {
//    createAccount () {
//      let {email, username, password} = this.getProperties (['email', 'username', 'password']);
//      let account = this.get ('store').createRecord ('account', {username, password, email});
//      let adapterOptions = {signIn: true};

//      account.save ({adapterOptions}).then (account => {
//        // You can transition to a protected application route
//      }).catch (reason => {
//        // Display error message to user
//      });
//    }
//  }
=======
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
>>>>>>> 8fd75d2fb271f3513df5a78a61912d4f66abd9d6
});
