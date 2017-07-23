import Ember from 'ember';

export default Ember.Component.extend({
  //adds a computed property to the user interface called heading 
  heading: Ember.computed('rating.author', 'rating.score', function(){
    return this.get('rating.author') + ' - ' + this.get('rating.score');
  }),
});
