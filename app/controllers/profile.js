import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  actions: {
    UpdateProfile() {
      let currentUserId = this.get('gatekeeper.currentUser.id');
      let { firstName, birthday, zipcode, bio, age, gender } = this.getProperties(['firstName', 'birthday', 'zipcode', 'bio', 'breed', 'age', 'gender']);

      $.ajax({
        type: 'PUT',
        url: `http://localhost:5000/v1/user/${currentUserId}`,
        data: {
          firstName,
          birthday,
          zipcode,
          bio,
          age,
          gender
        }
      });

    }
  }
});
