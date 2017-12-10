import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:settings', 'Unit | Controller | settings', {
  needs: ['service:local-storage', 'service:user']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
