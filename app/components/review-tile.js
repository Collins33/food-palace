import Ember from 'ember';

export default Ember.Component.extend({
  heading: Ember.computed('rating.author', 'rating.score', function(){
    return this.get('rating.author') + ' - ' + this.get('rating.score');
  }),
});
