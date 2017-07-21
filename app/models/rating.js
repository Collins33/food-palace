import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  score: DS.attr(),
  content: DS.attr(),
  hotel: DS.belongsTo('hotel', {async: true}),
});
