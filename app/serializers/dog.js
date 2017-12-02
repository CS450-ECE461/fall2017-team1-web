import DS from 'ember-data';

let { JSONAPISerializer } = DS;

export default JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id) {
    payload = {
      data: {
        id,
        type: 'dog',
        attributes: payload
      }
    };

    return payload;
  }
});
