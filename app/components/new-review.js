import Ember from 'ember';

export default Ember.Component.extend({
  //this makes the form to add a review not visible
  addNewReview: false,
  actions: {
    reviewFormShow() {
      //this action makes the addNewReview true so making the form visible
      this.set('addNewReview', true);
    },

    saveReview() {
      //the console.log was to test if the method was working well
      console.log("hello");
     var params = {
       //this collects input from the review form
       author: this.get('author'),
       score: this.get('score'),
       content: this.get('content'),
       hotel: this.get('hotel')
     };
     //this sets the review form to negative thus making it not visible
     this.set('addNewReview', false);
     //this passes the action up to the route handler
     this.sendAction('saveReview', params);
     //console.log for checking where a bug was
      console.log("hi");
   },
  }
});
