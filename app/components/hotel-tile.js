import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    //the method that deletes a listed hotel
    deleteHotel(hotel){
      if(confirm("are you sure you want to delete?")){
        this.sendAction('deleteHotel',hotel);
      }
    },
    //the method that is used to update an existing hotel
    update(hotel,params){
      this.sendAction('update',hotel,params);
    },
  }

});
