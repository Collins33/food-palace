import DS from 'ember-data';

export default DS.Model.extend({
  //hotel model to persisit data to firebase about the restaurant
  name: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  //establishing relationship between restaurant and ratings
  ratings: DS.hasMany('rating', {async: true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
