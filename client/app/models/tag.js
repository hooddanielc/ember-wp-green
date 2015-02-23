import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  count: DS.attr('number'),
  description: DS.attr()
});
