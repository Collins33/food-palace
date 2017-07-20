import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('hotel');
  },
  actions:{
    deleteHotel(hotel){
      hotel.destroyRecord();
      this.transitionTo('index');
    }
  }
});
