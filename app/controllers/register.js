import Controller from '@ember/controller';
// import $ from 'jquery';

export default Controller.extend({
  actions: {
    createAccount() {
      let { email, password /* , firstName, lastName */ } = this.getProperties(['email',  'password', 'firstName', 'lastName']);

      // email will be the users username
      let username = email;

      // let user = { firstName, lastName };

      let newAccount = this.get('store').createRecord('account', { username, password, email });

      newAccount.save({ signIn: true }).then(() => {
        // this.updateUser(value, user);
        this.transitionToRoute('/');
      });
    }
  }
  // ,
  //
  // // after account and user creation, update user will form issue
  // updateUser(account, user) {
  //   return new Promise((resolve, reject) => {
  //     $.ajax({
  //       type: 'PUT',
  //       url: `http://localhost:5000/v1/user/${account._internalModel.id}`,
  //       data: user
  //     });
  //   });
  // }
});
