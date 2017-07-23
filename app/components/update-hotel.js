import Ember from 'ember';

export default Ember.Component.extend({
  //make update form not visible when page loads for the first time
  showUpdateForm:false,
  actions:{
    showUpdateFormButton(){
      //this makes the form visible
      this.set('showUpdateForm',true);
    },
    update(hotel){
      //collects data from the update form
      var params={
        name: this.get('name'),
        location: this.get('location'),
        image: this.get('image'),
        description: this.get('description')
      };
      //sets update form false thus makinng it not visible
      this.set('showUpdateForm',false);
      //passes the update method to the route handler
      this.sendAction('update',hotel,params);
    }
  }
});
