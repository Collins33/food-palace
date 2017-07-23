import Ember from 'ember';

export default Ember.Component.extend({
  //this makes the form to add a restaurant not visible
  addRestaurant: false,
  actions:{
    //this action makes the addRestaurant true so making the form visible
    toggleHotelForm(){
      this.set('addRestaurant',true)
    },
    addNewRestaurant(){
      //collects user input from the form
    var params = {
       name: this.get('name'),
       location: this.get('location'),
       image: this.get('image'),

       description: this.get('description'),
//collect latitude and longitude to be used in the maps
       latitude: this.get('latitude'),
       longitude: this.get('longitude')
     };
     //this makes the form hidden once the user submits
     this.set('addRestaurant', false);
     //this sends the addNewRestaurant action up to the route handler
     this.sendAction('addNewRestaurant', params);
   }
  }
});
