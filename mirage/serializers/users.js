import { RestSerializer } from 'ember-cli-mirage';

export default RestSerializer.extend({
  keyForAttribute(attr) {
    return attr;
  },

  keyForModel() {
    return 'user';
  }
});
