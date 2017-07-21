import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
      console.log("hello");
     var params = {
       author: this.get('author'),
       score: this.get('score'),
       content: this.get('content'),
       hotel: this.get('hotel')
     };

     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
      console.log("hi");
   },
  }
});
