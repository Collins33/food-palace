import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('hotel');
  },
  actions:{
    deleteHotel(hotel){
      hotel.destroyRecord();
      this.transitionTo('index');
    },
    addNewRestaurant(params){
      var newRestaurant= this.store.createRecord('hotel',params);
      newRestaurant.save();
      this.transitionTo('index');
    },
    update(hotel,params){
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
