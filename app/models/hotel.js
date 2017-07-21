import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  ratings: DS.hasMany('rating', {async: true}),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
