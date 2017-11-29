import DS from 'ember-data';

let { Model, attr } = DS;

export default Model.extend({
  vetVerified: attr()
});
