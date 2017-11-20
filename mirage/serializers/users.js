import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  keyForAttribute(attr) {
    return attr;
  },

  keyForModel(modelName) {
    return modelName;
  },

  serialize(object) {
    return object;
  }
});
