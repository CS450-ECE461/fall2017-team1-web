import AccountAdapter from 'ember-cli-gatekeeper/adapters/account';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default AccountAdapter.extend({
  headers: computed('gatekeeper.accessToken', function() {
    let accessToken = this.get('gatekeeper.accessToken.access_token');
    let clientToken = this.get('gatekeeper.client.accessToken.access_token');

    return { Authorization: `Bearer ${accessToken || clientToken}` };
  }),

  urlForQueryRecord(query, modelName) {
    if (isEmpty(Object.keys(query))) {
      return this.buildURL(modelName, 'me', null, 'findRecord', null);
    }
  }
});
