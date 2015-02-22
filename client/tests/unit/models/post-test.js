import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('post', {
  // Specify the other units that are required for this test.
  needs: [
    'model:user',
    'model:category',
    'model:tag',
    'model:term'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
