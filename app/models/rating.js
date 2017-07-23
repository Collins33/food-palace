import DS from 'ember-data';

export default DS.Model.extend({
  //ratings model to persist data to firebase about the reviews
  author: DS.attr(),
  score: DS.attr(),
  content: DS.attr(),
  //establishing relationship between rating and restaurant
  hotel: DS.belongsTo('hotel', {async: true}),
});
