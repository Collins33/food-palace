import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('hotel', params.hotel_id);

  },
  actions:{
    saveReview(params) {
      var newRating = this.store.createRecord('rating', params);
      var hotel = params.hotel;
      hotel.get('ratings').addObject(newRating);
      newRating.save().then(function(){
        return hotel.save()
      });
      this.transitionTo('foodz' , hotel);
    },
  }
});
