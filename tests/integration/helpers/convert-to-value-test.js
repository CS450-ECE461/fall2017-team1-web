
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('convert-to-value', 'helper:convert-to-value', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'high');

  this.render(hbs`{{convert-to-value inputValue}}`);

  assert.equal(this.$().text().trim(), 1);
});

