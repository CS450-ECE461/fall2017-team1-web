import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  serialize(object) {
    return object.models;
  }
});
