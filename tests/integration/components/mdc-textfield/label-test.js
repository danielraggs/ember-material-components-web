import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdc-textfield/label', 'Integration | Component | mdc textfield/label', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdc-textfield/label}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdc-textfield/label}}
      template block text
    {{/mdc-textfield/label}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
