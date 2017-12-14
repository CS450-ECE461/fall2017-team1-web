import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    UpdateProfile() {
      let currentUser = this.get('gatekeeper.currentUser.id');
      let { firstName, birthday, zipcode, bio, age, gender } = this.getProperties(['firstName', 'birthday', 'zipcode', 'bio', 'breed', 'age', 'gender']);

      $.ajax({
        type: 'PUT',
        url: 'http://localhost:5000/v1/user/' + currentUser,
        data: ({ firstName, birthday, zipcode, bio, age, gender })
      });

    }
  }
});