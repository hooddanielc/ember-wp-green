import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('term', {
  // Specify the other units that are required for this test.
  needs: [
    'model:post',
    'model:user',
    'model:tag',
    'model:category'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
