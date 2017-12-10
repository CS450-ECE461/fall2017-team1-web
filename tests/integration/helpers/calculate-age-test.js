
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('calculate-age', 'helper:calculate-age', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '2017-12-06T02:02:59.205Z');

  this.render(hbs`{{calculate-age inputValue}}`);

  assert.equal(this.$().text().trim(), '0');
});
