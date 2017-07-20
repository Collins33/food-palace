import Ember from 'ember';

export default Ember.Component.extend({
  addRestaurant:false,
  actions:{
    toggleHotelForm(){
      this.set('addRestaurant',true);
    },
    addNewRestaurant(){
      var params={
        name: this.get('name'),
        location: this.get('location'),
        image: this.get('image'),
        description: this.get('description')
      };
      this.set('addRestaurant',false);
      this.sendAction('addNewRestaurant',params);
    }
  }
});
