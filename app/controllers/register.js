import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  ajax: Ember.inject.service(),
  actions:{
    createAccount() {

      let {
        email, password, firstName, lastName
      } = this.getProperties([
        'email',  'password', 'firstName', 'lastName'
      ]);
      // email will be the users username
      let username = email;

      let user = {firstName: firstName, lastName:lastName};

      let newAccount = this.get('store').createRecord('account', {username, password, email});

      console.log("TESTRES!");

      newAccount.save({signIn:true}).then((value) =>{
        console.log(value);

        this.updateUser(value, user);
        this.transitionToRoute('/');
      }).catch(err => {
        console.log('error' + err);
      });
    }
  },

  // after account and user creation, update user will form issue
  updateUser(account, user){
    return new Promise((resolve, reject) =>{
      $.ajax( {
        type : 'PUT',
        url:'http://localhost:5000/v1/user/' + account._internalModel.id,
        data: user
      });
    });
  }
});