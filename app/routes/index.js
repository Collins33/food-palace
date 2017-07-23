import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      //load more than one model from firebase
      hotels: this.store.findAll('hotel'),
      ratings: this.store.findAll('rating')
    });
  },
  actions:{
    //delete restaurant
    deleteHotel(hotel){
      hotel.destroyRecord();
      this.transitionTo('index');
    },
    addNewRestaurant(params){
      //add restaurant
      var newRestaurant= this.store.createRecord('hotel',params);
      newRestaurant.save();
      this.transitionTo('index');
    },
    update(hotel,params){
      //update restaurant
      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined){
          hotel.set(key,params[key]);
        }
      });
      hotel.save();
      this.transitionTo('index');
    },

  }
});
