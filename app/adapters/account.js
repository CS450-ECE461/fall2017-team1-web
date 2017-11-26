import AccountAdapter from 'ember-cli-gatekeeper/adapters/account';
import { isEmpty } from '@ember/utils';

export default AccountAdapter.extend({
  urlForQueryRecord(query, modelName) {
    if (isEmpty(Object.keys(query))) {
      return this.buildURL(modelName, 'me', null, 'findRecord', null);
    }
  }
});
