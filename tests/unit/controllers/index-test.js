import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:index', 'Unit | Controller | index', {
  needs: ['service:gatekeeper', 'service:gatekeeper-client', 'service:local-storage']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
