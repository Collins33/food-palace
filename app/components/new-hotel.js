import Ember from 'ember';

export default Ember.Component.extend({
  addRestaurant:false,
  actions:{
    toggleHotelForm(){
      this.set('addRestaurant',true);
    }
  }
});
