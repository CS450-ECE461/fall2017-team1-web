import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('progress-bar', 'Integration | Component | progress bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{progress-bar}}`);

  assert.equal(this.$().text().trim(), '');
});
