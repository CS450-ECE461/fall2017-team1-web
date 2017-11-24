import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

let { Model, attr } = DS;

export default Model.extend({
  firstName: attr(),
  lastName: attr(),
  bio: attr(),
  gender: attr(),
  breed: attr(),
  birthday: attr(),
  size: attr(),
  fixed: attr(),
  vetVerification: attr(),
  weight: attr(),
  energy: attr(),
  playful: attr(),

  fullName: computed('firstName', 'lastName', function() {
    if (this.get('lastName') !== '') {
      return `${this.get('firstName')} ${this.get('lastName')}`;
    }

    return this.get('firstName');
  }),

  age: computed('birthday', function() {
    return moment().diff(moment(this.get('birthday')), 'years');
  }),

  fixedStatus: computed('fixed', 'gender', function() {
    let status = this.get('gender') === 'male' ? 'Neutered' : 'Spayed';

    return this.get('fixed') ? status : `Not ${status}`;
  })
});
