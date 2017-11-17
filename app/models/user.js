import DS from 'ember-data';
import { computed } from '@ember/object';

let { Model, attr } = DS;

export default Model.extend({
  _id: attr(),
  accountId: attr(),
  firstName: attr(),
  lastName: attr(),
  gender: attr(),
  bio: attr(),
  homeAddress: attr(),
  geoLocation: attr(),
  status: attr(),
  birthday: attr(),
  dog: attr(),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  })
});
