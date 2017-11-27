import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

let { Model, attr, hasMany } = DS;

export default Model.extend({
  accountId: attr(),
  firstName: attr(),
  lastName: attr(),
  gender: attr(),
  bio: attr(),
  avatar: attr(),
  homeAddress: attr(),
  geoLocation: attr(),
  status: attr(),
  birthday: attr(),
  dog: attr(),
  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
  age: computed('birthday', function() {
    return moment().diff(moment(this.get('birthday')), 'years');
  })
});
