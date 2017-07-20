import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteHotel(hotel){
      if(confirm("are you sure you want to delete?")){
        this.sendAction('deleteHotel',hotel);
      }
    },
    update(hotel,params){
      this.sendAction('update',hotel,params);
    },
  }

});
