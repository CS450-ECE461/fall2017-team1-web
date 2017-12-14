import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sign-in', 'Integration | Component | sign in', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{sign-in}}`);

  assert.equal(this.$().text().trim(), 'log in\nsign up');
});
