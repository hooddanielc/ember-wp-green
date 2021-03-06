import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  slug: DS.attr(),
  description: DS.attr(),
  parent: DS.attr(),
  count: DS.attr('number'),
  link: DS.attr(),
  posts: DS.hasMany('post', {
    inverse: 'terms',
    async: true
  })
});
