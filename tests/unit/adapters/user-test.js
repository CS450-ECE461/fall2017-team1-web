import { moduleFor, test } from 'ember-qunit';

moduleFor('adapter:user', 'Unit | Adapter | user', {
  needs: ['service:gatekeeper', 'service:gatekeeper-client', 'service:local-storage']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let adapter = this.subject();
  assert.ok(adapter);
});
